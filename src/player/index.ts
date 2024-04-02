import playerTemplate from '../template/player.ejs'
import { PlayerOptions } from "../model/player";
import '../styles/index.scss';
import Icons from '../model/icons'
import Hls from 'hls.js'
import Controller from "../components/controller";
import DzPlayEvents, { EventsList } from "../components/events";
import { downloadBase64, getVideoInfo, isArray, isString } from '../utils/index';
import { OptionVal } from '@/model/common';
const instances: DzPlayer[] = []

export default class DzPlayer {
    options: PlayerOptions // 播放器配置
    container: HTMLElement // 挂载目标元素
    videoContainer!: HTMLElement // 视频容器
    controls:boolean; //是否显示控制栏
    video!: HTMLVideoElement // 播放器
    paused: boolean = true // 是否暂停
    videoType: PlayerOptions['type'] = 'auto' // 视频类型
    hls?: Hls // hls 实例
    controller!: Controller // 控制器
    events!: DzPlayEvents // 事件
    waterMark?: HTMLElement // 水印节点
    duration: number = 0 // 视频时长

    clipStart: number // 视频片段的开始时间
    clipEnd: number // 视频片段的结束时间
    handleVideoEndByOuter: boolean = false // 是否由外部控制视频结束
    constructor(options: PlayerOptions){
        this.container = options.container
        this.options = options
        this.controls = options.controls != undefined ? options.controls : true;
        this.clipStart = options.clipStart || 0
        this.clipEnd = options.clipEnd || 0
        this.handleVideoEndByOuter = options.handleVideoEndByOuter || false
        // 播放器事件系统
        this.events = new DzPlayEvents(this)
        this.setup()
        // 保存实例
        instances.push(this)
    }
    private setup() {
        this.videoContainer = document.createElement('div') as HTMLElement
        this.videoContainer.className = 'dz-player-container'

        //如果设置了自定义样式，则重新设置style
        if(this.options.customStyle){
            this.videoContainer.setAttribute("style",this.options.customStyle);
        }

        this.videoContainer.style.width = this.options.width || '100%'
        this.videoContainer.style.height = this.options.height || '100%'
        // 播放器模板

        //动态获取src,如果url是字符串，则直接赋值，
        //如果是数组，则获取值为default的，如果没有设置default，则取第一个
        let src:string = "";
        if(isString(this.options.url)){
            src = this.options.url as string;
        } else if(isArray(this.options.url)) {
            const urls = this.options.url as OptionVal[];
            urls.map(item => {
                src = item.default ? item.value as string : urls[0].value as string;
            });
        }
        this.videoContainer.innerHTML = playerTemplate({
            ...(this.options || {}),
            src: src
        });
        // 将 player 添加到指定容器中
        this.container.innerHTML = ''
        this.container.appendChild(this.videoContainer)
        // 视频节点
        this.video = this.videoContainer.querySelector('.dz-player-video') as HTMLVideoElement
        
        // 设置水印图案
        this.handleWaterMarkShow()

        // 初始化视频
        this.initVideo()
        // 播放器控制器
        if(this.controls){
            this.controller = new Controller(this)
        }
        
        this.seek(this.clipStart)
    }

    // 初始化播放器,设置视频相关回调函数
    private initVideo() {
        // 初始化 MSE 支持
        this.initMSE(this.video, this.options.type)

        // 播放回调
        this.on('play', this.onPlay)
        // 暂停播放
        this.on('pause', this.onPause)
        // 播放结束
        this.on('ended', async () => {
        if (this.clipEnd) return
        if (!this.options.loop) {
            !this.paused && this.seek(this.clipStart)
            await this.pause()
        } else {
            !this.paused && this.seek(this.clipStart)
            await this.play()
        }
        this.controller && this.controller.updateSeekBar(true)
        })
        // 视频元数据加载完成
        this.on('loadedmetadata', this.onLoadedMetadata)   
    }
    private onLoadedMetadata = () => {
        // 更新视频时长
        this.duration = this.clipEnd - this.clipStart || this.video.duration
        this.controller && this.controller.onTimeupdate()
    }

    // 当视频开始播放时，
    private onPlay = () => {
        // 更新播放器状态
        this.paused = false
        if(!this.controller) return
        this.controller.playButton && (this.controller.playButton.innerHTML = Icons.pause)
        this.controller.controlPlayButton && (this.controller.controlPlayButton.innerHTML = Icons.controlPause)
        this.controller.updateSeekBar()
    }

    // 当视频暂停播放时
    private onPause = () => {
        // 更新播放器状态
        this.paused = true
        if(!this.controller) return
        this.controller.playButton && (this.controller.playButton.innerHTML = Icons.play)
        this.controller.controlPlayButton && (this.controller.controlPlayButton.innerHTML = Icons.controlPlay)
        // 取消动画
        cancelAnimationFrame(this.controller.playRaf)
    }

    // 注册事件
    on(name: EventsList, callback: (...arg: any) => void) {
        this.events.on(name, callback)
    }

    // 注册一次性事件
    once(name: EventsList, callback: (...arg: any) => void) {
        this.events.once(name, callback)
    }

    // 手动触发事件
    emit(name: EventsList, data?: any) {
        this.events.emit(name, data)
    }

    // 移除事件
    off(name: EventsList, callback: (...arg: any) => void) {
        this.events.off(name, callback)
    }

    // MSE 支持
    initMSE(video: HTMLVideoElement, type: PlayerOptions['type']) {
        this.videoType = type
        if (type === 'hls') {
            this.videoType = 'hls'
            // 如果浏览器支持播放 HLS 视频流。
            if (video.canPlayType('application/x-mpegURL') || video.canPlayType('application/vnd.apple.mpegURL')) {
                this.videoType = 'hls'
            }
            // 错误传参时，纠正播放类型
            if (/.mp4(#|\?|$)/i.exec(video.src)) {
                this.videoType = 'normal'
            }
        }
        if (type === 'auto') {
            this.videoType = 'normal'
            if (/m3u8(#|\?|$)/i.exec(video.src)) this.videoType = 'hls'
            if (/.flv(#|\?|$)/i.exec(video.src)) this.videoType = 'flv'
            if (/.mpd(#|\?|$)/i.exec(video.src)) this.videoType = 'dash'
        }
        switch (this.videoType) {
            case 'flv':
                console.error('暂不支持 flv 格式视频')
                break
            case 'dash':
                console.error('暂不支持 dash 格式视频')
                break
            case 'hls':
                this.useHls(video)
                break
        }
    }

    // 使用 hls 播放视频
    useHls = (video: HTMLVideoElement) => {
        try{
            this.hls = new Hls()
            this.hls.loadSource(video.src)
            this.hls.attachMedia(video) 
        } catch(e){
            console.error("Error: Can't find Hls.",e)
        }
    }

    // 销毁 hls 实例
    destroyHls = () => {
        this.hls && this.hls.destroy()
    }

    // 播放视频
    play = async () => {
        await this.video.play()
    }

    // 暂停视频
    pause = async () => {
        await this.video.pause()
    }

    // 切换播放状态
    togglePlay = async (event?: Event) => {
        if (this.video!.paused) {
            await this.play()
        } else {
            await this.pause()
        }
        // event.preventDefault()
        // event.stopPropagation()
    }

    // 跳转到视频指定位置，调整视频播放进度
    seek = (time: number) => {
        this.video.currentTime = Number(time)
    }

    // 设置音量
    volume(val: number | string) {
        let percentage = parseFloat((val || this.video.volume) as string)
        if (!isNaN(percentage)) {
            percentage = Math.max(percentage, 0)
            percentage = Math.min(percentage, 1)

            this.video.volume = percentage
            if (this.video.muted) {
                this.video.muted = false
            }
            this.controller.switchVolumeIcon()
        }
        return this.video.volume
    }

    // 静音或取消静音
    mute = () => {
        // 静音或取消静音
        this.video!.muted = !this.video!.muted
        this.controller.volumeSlider!.value = this.video!.muted ? '0' : this.video!.volume + ''
        this.controller.muteButton!.innerHTML = this.video!.muted ? Icons.volumeOff : Icons.volumeUp
    }

    // 进入或退出全屏模式
    toggleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            if (this.video.requestFullscreen) {
                this.video.requestFullscreen();
            } else if ((this.video as any).mozRequestFullScreen) {
                (this.video as any).mozRequestFullScreen();
            } else if ((this.video as any).webkitRequestFullscreen) {
                (this.video as any).webkitRequestFullscreen();
            } else if ((this.video as any).webkitSupportsFullscreen) {
                (this.video as any).webkitEnterFullscreen();
            }
        }
    }
    
    /**
     * @description 视频截图
     * @param download 
     * @param name 
     * @returns 
     */
    screenshot(download:boolean = true,name:string = 'screenshot.png'){
        try{
            //截图视频
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            // 获取视频宽高
            const videoInfo = getVideoInfo(this.video);
            canvas.width = videoInfo.width;
            canvas.height = videoInfo.height;

            const mediaRatio = this.video.videoWidth / this.video.videoHeight
            const canvasRatio = canvas.width / canvas.height

            const sx = 0, sy = 0, sw = this.video.videoWidth, sh = this.video.videoHeight
            let dx, dy,dw, dh = 0;

            if (mediaRatio > canvasRatio) {
                dw = canvas.width
                dh = canvas.width / mediaRatio
                dx = 0
                dy = Math.round((canvas.height - dh) / 2)
            } else if (mediaRatio === canvasRatio) {
                dw = canvas.width
                dh = canvas.height
                dx = 0
                dy = 0
            } else if (mediaRatio < canvasRatio) {
                dw = canvas.height * mediaRatio
                dh = canvas.height
                dx = Math.round((canvas.width - dw) / 2)
                dy = 0
            }
            ctx?.drawImage(this.video, sx, sy, sw, sh, dx as number, dy as number, dw as number, dh);
            if(download && canvas.toDataURL('image/png',1)){
                downloadBase64(name,canvas.toDataURL());
            }
            return canvas.toDataURL() || null;
        } catch( error ){
            console.error(error);
            return null;
        }
    }

    /**
     * @description 动态设置url地址
     */
    src = async (src: string) => {
        this.video.setAttribute("src",src);
        this.video.load();
    }

    // 控制水印的显示与隐藏
    handleWaterMarkShow = () => {
        // 水印节点
        this.waterMark = this.videoContainer.querySelector('.dz-player-watermark') as HTMLElement
        if(this.waterMark){
            if(this.options.waterMark?.show){
                this.waterMark.setAttribute("style",this.options.waterMark.style as string);
                this.waterMark.style.display = 'block';
                // 设置水印图案
                this.waterMark.style.backgroundImage = `url(${this.options.waterMark?.url})`
            }
        }
    }

    // 挂载控制器到目标节点
    mountController = (mountTarget: HTMLElement) => {
        if(!this.controls) return
        if (this.options.controlOptions && this.options.controlOptions.nativeControls) return
        this.controller.removeMountTargetEvent()
        this.controller.mountTarget = mountTarget
        this.controller.initMountTargetEvent()
        mountTarget.appendChild(this.controller.controlElement)
    }

    // 选取视频片段
    cutVideo = (start: number, end: number) => {
        this.clipStart = start
        this.clipEnd = end
        this.duration = end - start
        this.seek(start)

        this.controls && this.controller.initTimeTip()
        this.controls && this.controller.updateSeekBar(true)
    }

    // 销毁播放器
    destroy = async () => {
        this.destroyHls()
        instances.splice(instances.indexOf(this), 1)
        await this.pause()
        this.video.src = ''
        this.container.innerHTML = ''
        this.controller && this.controller.destroy()
        // this.timer.destroy()
        // this.events.trigger('destroy')
    }


}