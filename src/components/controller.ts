import controlTemplate from '../template/control.ejs'
import { ControlOptions } from "../model/control"
import Icons from '../model/icons'
import DzPlayer from "../player"
import { formatTime, isMobile, secondToTime, throttle,isString, isArray } from '../utils'
import ToolBar from './toolbar'
import { OptionVal } from '@/model/common'

export default class Controller {
    player: DzPlayer // 播放器实例
    autoHideTimer?: number // 自动隐藏计时器
    disableAutoHide: boolean = false // 禁用自动隐藏
    toolBar?: ToolBar
    playButton!: HTMLElement // 播放按钮
    seekBar!: HTMLInputElement // 进度条
    bottomControlBar!: HTMLElement // 底部控制栏

    playBackRatio?: HTMLElement //播放速率
    playBackRatioItem?: HTMLElement[] //播放速率列表

    playVideoList?: HTMLElement //播放列表容器
    playVideoListItem?: HTMLElement[] //播放列表条目
  
    playTime?: HTMLElement // 播放时间
    volumeSlider?: HTMLInputElement // 是否显示音量控制栏
    volumeControlBar?: HTMLInputElement // 声音控制栏
    muteButton?: HTMLElement // 静音按钮
    fullScreenButton?: HTMLElement // 全屏按钮
    loading?: HTMLElement // 加载动画
    controlPlayButton?: HTMLElement //底部播放/暂停按钮
    controlFlushButton?: HTMLElement //底部直播刷新按钮
  
    controlElement!: HTMLElement // 控制器节点
    mountTarget!: HTMLElement // 控制器挂载目标
    playRaf = 0 // 播放 requestAnimationFrame Id
  
    controlOptions: ControlOptions
    constructor(player: DzPlayer) {
      this.player = player
      this.controlOptions = player.options.controlOptions || {}
      this.mountTarget = this.controlOptions.mountTarget || this.player.videoContainer
      this.initControls()
      /**
       * 必须在initControls之后，挂在自定义按钮必须先初始化init
       */
      this.toolBar = new ToolBar(player)
      this.initControlsEvent()
    }
  
    // 初始化播放器控制条
    private initControls = () => {
      // 控制面板节点
      this.controlElement = document.createElement('div')
      this.controlElement.className = 'dz-player-control-panel'
      this.controlElement.innerHTML = controlTemplate({
         ...(this.player.options.controlOptions || {}), 
         volume: this.player.options.volume,
         srcType:this.player.videoType,
         ratios:this.player.options.speedList?.length ? this.player.options.speedList:null,
         showControl: this.player.controls,
         videoList:isString(this.player.options.url) ? null : this.player.options.url})
      // 将控制面板添加到目标容器中
      !this.controlOptions.manualMount && !this.controlOptions.nativeControls && this.mountTarget.appendChild(this.controlElement)
      // loading 动画
      this.loading = this.controlElement.querySelector('.dz-player-loading') as HTMLElement
      if( this.loading ){
        this.loading.innerHTML = Icons.loading
        this.loading!.style.opacity = '0'
      }
      
      this.bottomControlBar = this.controlElement.querySelector('.dz-player-control-bar') as HTMLElement
      if( this.bottomControlBar ){
        this.bottomControlBar.addEventListener('mousedown', (event) => event.stopPropagation())
      }
      
      this.initPlayButton()
      this.initControlPlayOrPauseButton()
      this.initControlFlushButton()
      this.initSeekBar()
      this.initVolumeButton()
      this.initFullScreenButton()
      this.initPlaybackRate()
      this.initPlayVideoList()

  
      // 其他
      // if (!this.player.options.controlOptions) {}
    }
  
    // 初始化播放按钮
    private initPlayButton = () => {
      // 设置控制条按钮的事件处理函数
      this.playButton = this.controlElement.querySelector('.dz-player-play-icon') as HTMLElement
      if (!this.playButton) return
      this.playButton.innerHTML = Icons.play
      this.playButton.addEventListener('click', this.player.toggle)
    }
    private initControlPlayOrPauseButton = () => {
      // 设置控制条全屏按钮的事件处理函数
      this.controlPlayButton = this.controlElement.querySelector('.control-play') as HTMLElement
      if (!this.controlPlayButton) return
      this.controlPlayButton.addEventListener('click', this.player.toggle)
      this.controlPlayButton.innerHTML = Icons.controlPlay
    }
    private initControlFlushButton = () => {
      this.controlFlushButton = this.controlElement.querySelector('.control-flush') as HTMLElement
      if (!this.controlFlushButton) return
      this.controlFlushButton.addEventListener('click', ()=> {
        const that = this;
        //重新加载url
        that.player.pause()
        that.player.video.currentTime = that.player.video.duration;
        that.player.play()
      })
      this.controlFlushButton.innerHTML = Icons.controlFlush
    }
  
    // 初始化播放进度条
    private initSeekBar = () => {
      // 设置控制条滑块的事件处理函数
      this.seekBar = this.controlElement.querySelector('.dz-player-seek-slider') as HTMLInputElement
      if (!this.seekBar) return
      let playStatus = false
      // 记录当前播放状态，并暂停播放
      const pausePlay = (event: Event) => {
        event.stopPropagation()
        // 记录当前播放状态
        playStatus = !this.player.video.paused
        // 先暂停播放
        this.player.pause()
      }
      // 恢复播放状态
      const resumePlay = (event: Event) => {
        event.stopPropagation()
        // 恢复播放状态
        playStatus && this.player.play()
      }
      this.playTime = this.controlElement.querySelector('.dz-player-play-time') as HTMLInputElement
      this.seekBar && this.seekBar.addEventListener('mousedown', pausePlay)
      this.seekBar && this.seekBar.addEventListener('mouseup', resumePlay)
      this.seekBar && this.seekBar.addEventListener('touchstart', pausePlay)
      this.seekBar && this.seekBar.addEventListener('touchend', resumePlay)
      this.seekBar && this.seekBar.addEventListener('touchmove', (event) => event.stopPropagation())
      this.seekBar && this.seekBar.addEventListener('input', this.onSeeking)
    }
  
    // 初始化视频播放速率
    private initPlaybackRate = () => {
      this.player.video.playbackRate = this.player.options.playbackRate || 1
      if(!this.player.options.speedList?.length){
        return;
      }
      this.playBackRatio = this.controlElement.querySelector('.dz-player-playbackRatio') as HTMLElement
      if(!this.playBackRatio){
        return 
      }
      const tmpPlayBackRatioBox = this.playBackRatio?.querySelector(".playbackRatio-box") as HTMLElement
      const tmpPlayBackRatioOver = this.playBackRatio?.querySelector(".dz-player-playbackRatio_over") as HTMLElement
      this.playBackRatio?.addEventListener("mouseenter",() => {
        tmpPlayBackRatioBox.style.display = 'block';
        tmpPlayBackRatioOver.style.display = "block";
        tmpPlayBackRatioBox.addEventListener("mouseleave",() => {
          tmpPlayBackRatioBox.style.display = "none";
          tmpPlayBackRatioOver.style.display = "none";
        });
      });
      this.playBackRatio.addEventListener("mouseleave",() => {
        tmpPlayBackRatioBox.style.display = "none";
        tmpPlayBackRatioOver.style.display = "none";
      });
      
      this.playBackRatioItem = this.controlElement.querySelectorAll(".playbackRatio-box__wrap-item") as unknown as HTMLElement[]
      if(!this.playBackRatioItem){
        return;
      }
      for(let i = 0 ; i <this.player.options.speedList?.length;i++ ){
        (this.playBackRatioItem[i] as HTMLElement).addEventListener("click",() => {
          this.playBackRatio?.querySelector(".select")?.classList.remove("select");
          if(this.playBackRatioItem){
            (this.playBackRatioItem[i] as HTMLElement).classList.add("select");
            if(this.player.options.speedList && this.player.options.speedList[i]){
              this.player.video.playbackRate = (this.player.options.speedList[i] as OptionVal).value as number;
            }
            (this.playBackRatio?.querySelector(".dz-player-playbackRatio-text") as HTMLElement).textContent = (this.playBackRatioItem[i] as HTMLElement).innerText;
          }
        });
      }
    }
    //初始化视频清晰度列表
    private initPlayVideoList = () => {
      if(!isArray(this.player.options.url)){
        return;
      }
      this.playVideoList = this.controlElement.querySelector('.dz-player-videoList') as HTMLElement
      if(!this.playVideoList) return
      const playVideoListBox = this.playVideoList?.querySelector(".videoList-box") as HTMLElement
      const playVideoListText = this.playVideoList?.querySelector(".dz-player-videoList-text") as HTMLElement

      const playVideoListOver = this.playVideoList?.querySelector(".dz-player-videoList_over") as HTMLElement
      
      this.playVideoList?.addEventListener("mouseenter",() => {
        playVideoListBox.style.display = 'block';
        playVideoListOver.style.display = "block";
        playVideoListBox.addEventListener("mouseleave",() => {
          playVideoListBox.style.display = "none";
          playVideoListOver.style.display = "none";
        });
      });
      this.playVideoList.addEventListener("mouseleave",() => {
        playVideoListBox.style.display = "none";
        playVideoListOver.style.display = "none";
      });

      this.playVideoListItem = this.controlElement.querySelectorAll(".videoList-box__wrap-item") as unknown as HTMLElement[]
      if(!this.playVideoListItem){
        return;
      }

      for(let i = 0 ; i <this.player.options.url.length;i++ ){
        if((this.player.options.url[i] as OptionVal)?.default){
          playVideoListText.textContent = (this.player.options.url[i] as OptionVal).label;
        }
        (this.playVideoListItem[i] as HTMLElement).addEventListener("click",() => {
          playVideoListBox?.querySelector(".select")?.classList.remove("select");
          if(this.playVideoListItem){
            (this.playVideoListItem[i] as HTMLElement).classList.add("select");
            if(this.player.options.url && this.player.options.url[i]){
              const currentTime = this.player.video.currentTime;
              //设置video播放url
              this.player.src((this.player.options.url[i] as OptionVal).value as string);
              this.player.video.currentTime = currentTime;
              this.player.play();
            }
            playVideoListText.textContent = (this.playVideoListItem[i] as HTMLElement).innerText;
          }
        });
      }
    }
  
    // 初始化音量控制栏
    private initVolumeButton = () => {
      const volume = this.player.options.volume ? (this.player.options.volume > 1 ? this.player.options.volume / 100 : this.player.options.volume) : 1
      this.player.video.volume = volume
      if (!this.controlOptions.volumeControl) return
      // 设置控制条声音控制栏的事件处理函数
      this.muteButton = this.controlElement.querySelector('.dz-player-volume-icon') as HTMLButtonElement
      this.muteButton.addEventListener('click', this.player.mute)

      this.switchVolumeIcon()
      this.volumeSlider = this.controlElement.querySelector('.dz-player-volume-slider') as HTMLInputElement
      this.volumeSlider.addEventListener('input', throttle(this.onVolumeChange, 100))
      this.volumeControlBar = this.controlElement.querySelector('.dz-player-volume-bar') as HTMLInputElement

      this.volumeControlBar.addEventListener('mouseenter',()=>{
        this.volumeSlider?.setAttribute("style","width:60px;");
      })
      this.volumeControlBar.addEventListener('mouseleave',()=>{
        this.volumeSlider?.setAttribute("style","width:0px;");
      })
    }
  
    // 初始化全屏按钮
    private initFullScreenButton = () => {
      // 设置控制条全屏按钮的事件处理函数
      this.fullScreenButton = this.controlElement.querySelector('.dz-player-fullscreen') as HTMLElement
      if (!this.fullScreenButton) return
      this.fullScreenButton.addEventListener('click', this.player.toggleFullScreen)
      this.fullScreenButton.innerHTML = Icons.full
    }
  
    // 监听控制栏的尺寸变化, 控制显示隐藏 播放按钮，视频时间和音量控制栏
    private watchControlResize = () => {
      if(!this.player.controls){
        return;
      }
      const resizeObserver = new ResizeObserver(
        throttle((entries: ResizeObserverEntry[]) => {
          for (const entry of entries) {
            if (!entry.contentBoxSize) return
  
            const { inlineSize, blockSize } = entry.contentBoxSize[0]
            // 播放按钮的显示隐藏
            if(this.playButton){
              if (blockSize < 40 || inlineSize < 40) {
                this.playButton.style.display = 'none'
              } else {
                this.playButton.style.display = 'grid'
              }
            }
            // 控制栏的显示隐藏
            if (blockSize < 75 || inlineSize < 60) {
              this.bottomControlBar.style.display = 'none'
            } else {
              this.bottomControlBar.style.display = 'flex'
            }
            // 播放按钮的缩放
            if(this.playButton){
              if (blockSize < 100 || inlineSize < 100) {
                this.playButton.style.scale = '0.5'
              } else {
                this.playButton.style.scale = '1'
              }
            }
            
            // 控制全屏按钮的显示隐藏
            if (this.fullScreenButton && inlineSize < 200) {
              this.fullScreenButton.style.display = 'none'
            } else {
              this.fullScreenButton && (this.fullScreenButton.style.display = 'block')
            }
            // 控制播放时间显示隐藏
            if (this.playTime && inlineSize < 330) {
              this.playTime.style.display = 'none'
            } else {
              this.playTime && (this.playTime.style.display = 'block')
            }
            // 控制音量控制栏的显示隐藏
            if (this.volumeControlBar && inlineSize < 400) {
              this.volumeControlBar.style.display = 'none'
            } else {
              this.volumeControlBar && (this.volumeControlBar.style.display = 'flex')
            }
          }
        }, 30),
      )
  
      resizeObserver.observe(this.controlElement)
    }
  
    // 初始化控制栏相关事件
    private initControlsEvent = () => {
      if (isMobile) {
        // do something
      } else {
      }
      // 由于暂时缺少数据，播放已停止。
      this.player.on('waiting', this.onWaiting)
      // 更新播放时间
      this.player.on('timeupdate', this.onTimeupdate)
      // 由于缺乏数据而暂停或延迟后，播放准备开始。
      this.player.on('playing', this.onPlaying)
      this.player.on('canplay', () => this.toggleLoading(false))
      this.player.on('seeked', () => this.onSeeked)
      this.player.on('loadedmetadata', this.initTimeTip)
      // 播放，暂停后自动隐藏控制栏
      this.player.on('pause', this.setAutoHide)
      this.player.on('play', this.setAutoHide)
      this.initMountTargetEvent()
      // 监听控制栏的尺寸变化
      this.watchControlResize()
    }
  
    // 初始化时间 tip 逻辑
    initTimeTip = () => {
      const tooltip = this.controlElement.querySelector('.dz-player-play-time-tip') as HTMLElement
      const duration = this.player.duration
      let hasMoved = false
      let outOfBounds = false
      this.seekBar && this.seekBar.addEventListener('input', (event: Event) => {
        const target = event.target as HTMLInputElement
        tooltip.textContent = formatTime((+target.value / 100) * duration)
        if (isMobile && hasMoved && !outOfBounds) tooltip.style.display = 'block'
      })
  
      // 显示 tip
      const showTip = (event: MouseEvent | TouchEvent) => {
        const seekBarWidth = this.seekBar && this.seekBar.clientWidth
        let positionX = 0
        if (event instanceof MouseEvent) {
          tooltip.style.display = 'block'
          positionX = event.offsetX
          const timeStamp = (positionX / seekBarWidth) * duration
          tooltip.textContent = formatTime(timeStamp)
        }
        if (event instanceof TouchEvent) {
          const touch = event.touches[0]
          const target = event.target as HTMLElement
          let rect = target.getBoundingClientRect()
          positionX = touch.clientX - rect.left
          hasMoved = true
        }
        if (positionX < 0 || positionX > seekBarWidth) {
          tooltip.style.display = 'none'
          outOfBounds = true
        }
        outOfBounds = false
        tooltip.style.left = positionX - tooltip.clientWidth / 2 + 'px'
      }
  
      this.seekBar && this.seekBar.addEventListener('touchmove', showTip)
      this.seekBar && this.seekBar.addEventListener('mousemove', showTip)
      // 隐藏 tip
      const hideTip = () => {
        setTimeout(() => {
          tooltip.style.display = 'none'
          hasMoved = false
        }, 100)
      }
      this.seekBar && this.seekBar.addEventListener('mouseleave', hideTip)
      this.seekBar && this.seekBar.addEventListener('touchend', hideTip)
    }
  
    // 初始化控制栏容器相关事件
    initMountTargetEvent = () => {
      if (isMobile) this.mountTarget.addEventListener('touchstart', this.setAutoHide)
      this.mountTarget.addEventListener('click', this.setAutoHide)
      this.mountTarget.addEventListener('mousemove', this.setAutoHide)
    }
  
    // 移除控制栏容器相关事件
    removeMountTargetEvent = () => {
      // this.mountTarget?.removeEventListener('mousemove', this.setAutoHide)
      // this.mountTarget?.removeEventListener('mouseleave', this.hide)
    }
  
    // 设置控制栏的自动隐藏
    setAutoHide = () => {
      this.show()
      clearTimeout(this.autoHideTimer)
      this.autoHideTimer = window.setTimeout(() => {
        !this.player.paused && this.hide()
      }, 2 * 1000)
    }
  
    // 显示控制栏
    show = () => {
      this.mountTarget.classList.remove('dz-player-hide-controller')
    }
  
    // 隐藏控制栏
    hide = () => {
      this.mountTarget.classList.add('dz-player-hide-controller')
    }
  
    // 设置控制条是否显示
    setVisible(val: boolean) {
      val ? this.show() : this.hide()
    }
  
    // 切换控制条显示隐藏
    toggle = () => {
      if (!this.mountTarget.classList.contains('dz-player-hide-controller')) {
        this.hide()
      } else {
        this.show()
      }
    }
  
    // 更新播放进度条
    updateSeekBar = (once?: boolean) => {
      if (this.player.duration === 0 && this.player.video.currentTime === 0 && this.player.clipStart === 0){
        this.seekBar && (this.seekBar.value = '0')
      }
      if (once) return
      this.playRaf = window.requestAnimationFrame(() => this.updateSeekBar())
      this.seekBar && (this.seekBar.value = (((this.player.video.currentTime - this.player.clipStart) / this.player.duration) * 100).toString())
    }
  
    // 拖动进度条
    onSeeking = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
      const target = event.target as HTMLInputElement
      const seekTime = Number((parseFloat(target.value) / 100) * this.player.duration) + Number(this.player.clipStart)
      this.player.seek(seekTime)
    }
  
    // 快进结束
    onSeeked = () => {
      // 取消动画
      this.playRaf && cancelAnimationFrame(this.playRaf)
      this.updateSeekBar(true)
    }
  
    // 更新播放时间
    onTimeupdate = () => {
      if (!this.playTime && !this.controlOptions.manualMount) return
      const progress = + this.seekBar.value
      const currentTime = progress * this.player.duration * 0.01
      this.playTime && (this.playTime.textContent = `${secondToTime(currentTime < 0 ? 0 : currentTime)} / ${secondToTime(this.player.duration)}`)
      const videoCurrentTime = this.player.video.currentTime
      // 当前播放时间大于结束时间时，暂停播放 / 循环播放
      if (!this.player.handleVideoEndByOuter && this.player.clipEnd && videoCurrentTime >= this.player.clipEnd - 0.1) {
        this.player.pause()
        this.player.seek(Number(this.player.clipStart))
        this.updateSeekBar(true)
        if (this.player.options.loop) this.player.play()
      }
    }
  
    // 调整视频音量
    onVolumeChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      // 调整视频音量
      this.player.volume(Number(target.value))
    }
  
    // waiting 事件处理函数
    onWaiting = () => {
      if (!this.player.paused) this.player.paused = true
      this.toggleLoading(true)
    }
  
    // playing 事件处理函数
    onPlaying = () => {
      if (this.player.paused) this.player.paused = false
      this.toggleLoading(false)
    }
  
    // 控制 loading 动画的显示与隐藏
    toggleLoading(show: boolean) {
      if (show) {
        this.loading!.style.opacity = '1'
        this.playButton && (this.playButton!.style.opacity = '0')
      } else {
        this.loading!.style.opacity = '0'
        this.playButton && (this.playButton!.style.opacity = '1')
      }
    }
  
    // 切换音量图标
    switchVolumeIcon = () => {
      if (!this.controlOptions.volumeControl) return
      if (this.player.video.muted || this.player.video.volume === 0) {
        this.muteButton!.innerHTML = Icons.volumeOff
      } else if (this.player.video.volume > 0 && this.player.video.volume < 1) {
        this.muteButton!.innerHTML = Icons.volumeDown
      } else {
        this.muteButton!.innerHTML = Icons.volumeUp
      }
    }
  
    // 销毁事件
    destroy = () => {
      clearTimeout(this.autoHideTimer)
    }
}