import DzPlayer from "../player";
/**
 * @description 自定义按钮配置
 */
export interface ToolBarOptions {
    /**
     * 按钮名称
     */
    title: string;
    /**
     * 按钮图标，支持svg
     */
    icon: string;
    /**
     * 按钮文字
     */
    text?: string;
    /**
     * 按钮自定义样式
     */
    style?: string;
    /**
     * 按钮挂载方向
     */
    position?: 'left' | 'right';
    /**
     * 按钮点击事件
     * @returns
     */
    click?: (player: DzPlayer) => void;
}
