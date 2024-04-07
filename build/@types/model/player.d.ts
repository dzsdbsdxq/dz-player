import { OptionVal, WaterMaskOption } from "./common";
import { ControlOptions } from "./control";
import { ToolBarOptions } from "./toolbar";
/**
 * @description 播放器入参配置
 */
export interface PlayerOptions {
    /**
     * @description 播放器容器
     */
    container: HTMLElement;
    /**
     * @description 视频地址 String|Object[],URL为数组形式时，会使用显示清晰度
     */
    url: string | OptionVal[];
    /**
     * @description 视频类型
     */
    type?: 'auto' | 'normal' | 'hls' | 'flv' | 'dash';
    /**
     * @description 控制器的挂载目标
     */
    controlTarget?: HTMLElement;
    /**
     * @description 是否显示控制条
     */
    controls?: boolean;
    /**
     * @description 控制条配置
     */
    controlOptions?: ControlOptions;
    /**
     * @description 是否自动播放
     */
    autoplay?: boolean;
    /**
     * @description  是否循环播放
     */
    loop?: boolean;
    /**
     * @description 播放器宽度 "123px"
     */
    width?: string;
    /**
     * @description 播放器高度 "123px"
     */
    height?: string;
    /**
     * @description 视频封面
     */
    poster?: string;
    /**
     * @description 预加载
     */
    preload?: 'auto' | 'metadata' | 'none';
    /**
     * @description 是否静音
     */
    muted?: boolean;
    /**
     * @description 音量
     */
    volume?: number;
    /**
     * @description 播放速率
     */
    playbackRate?: number;
    /**
     * @description 倍速列表
     */
    speedList?: OptionVal[];
    /**
     * @description 是否使用 CORS（跨域资源共享）来获取相关视频
     */
    crossOrigin?: 'anonymous' | 'use-credentials';
    /**
     * @description 是否显示水印
     */
    waterMark?: WaterMaskOption;
    /**
     * @description 视频片段的开始时间
     */
    clipStart?: number;
    /**
     * @description 视频片段的结束时间
     */
    clipEnd?: number;
    /**
     * @description 是否由外部控制视频结束 ,用于视频片段播放 ,为 true 时，视频播放结束时不会触发 video end 事件
     * @default false
     */
    handleVideoEndByOuter?: boolean;
    /**
     * @description 播放器自定义样式
     */
    customStyle?: string;
    /**
     * @description Video自定义样式
     */
    videoStyle?: string;
    /**
     * @description 是否开启airplay
     */
    airplay?: boolean;
    toolBars?: Record<string, ToolBarOptions>;
}
