
/**
 * @description 控制器配置
 */
export interface ControlOptions {
    /**
     * @description 是否显示进度条
     */
    seekBar?: boolean
    /**
     * @description 是否显示播放时间
     */
    playTime?: boolean
    /**
     * @description 是否显示音量控制栏
     */
    volumeControl?: boolean
    /**
     * @description 是否显示全屏按钮
     */
    fullScreenControl?: boolean
    /**
     * @description 控制器挂载目标
     */
    mountTarget?: HTMLElement
    /**
     * @description  是否手动挂载
     * @default false
     */
    manualMount?: boolean
    /**
     * @description 是否使用原生控制条
     */
    nativeControls?: boolean
    /**
     * @description 自定义控制条样式
     */
    controlStyle?: string
  }