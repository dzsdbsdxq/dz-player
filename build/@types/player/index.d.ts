import { PlayerOptions } from "../model/player";
import '../styles/index.scss';
import Hls from 'hls.js';
import Controller from "../components/controller";
import DzPlayEvents, { EventsList } from "../components/events";
export default class DzPlayer {
    options: PlayerOptions;
    container: HTMLElement;
    videoContainer: HTMLElement;
    controls: boolean;
    video: HTMLVideoElement;
    paused: boolean;
    videoType: PlayerOptions['type'];
    hls?: Hls;
    controller: Controller;
    events: DzPlayEvents;
    waterMark?: HTMLElement;
    duration: number;
    clipStart: number;
    clipEnd: number;
    handleVideoEndByOuter: boolean;
    constructor(options: PlayerOptions);
    private setup;
    private initVideo;
    private onLoadedMetadata;
    private onPlay;
    private onPause;
    on(name: EventsList, callback: (...arg: any) => void): void;
    once(name: EventsList, callback: (...arg: any) => void): void;
    emit(name: EventsList, data?: any): void;
    off(name: EventsList, callback: (...arg: any) => void): void;
    initMSE(video: HTMLVideoElement, type: PlayerOptions['type']): void;
    useHls: (video: HTMLVideoElement) => void;
    destroyHls: () => void;
    play: () => Promise<void>;
    pause: () => Promise<void>;
    togglePlay: (event?: Event) => Promise<void>;
    seek: (time: number) => void;
    volume(val: number | string): number;
    mute: () => void;
    toggleFullScreen: () => void;
    /**
     * @description 视频截图
     * @param download
     * @param name
     * @returns
     */
    screenshot(download?: boolean, name?: string): string | null;
    /**
     * @description 动态设置url地址
     */
    src: (src: string) => Promise<void>;
    handleWaterMarkShow: () => void;
    mountController: (mountTarget: HTMLElement) => void;
    cutVideo: (start: number, end: number) => void;
    destroy: () => Promise<void>;
}
