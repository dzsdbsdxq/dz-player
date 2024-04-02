import { ToolBarOptions } from "@/model/toolbar";
import DzPlayer from "../player";
export default class ToolBar {
    player: DzPlayer;
    iconElement: HTMLElement;
    mountTarget: HTMLElement;
    toolBarOptions: Record<string, ToolBarOptions>;
    constructor(player: DzPlayer);
    private initToolBar;
    private createElement;
}
