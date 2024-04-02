import { ToolBarOptions } from "@/model/toolbar"
import DzPlayer from "../player"

export default class ToolBar {
    player: DzPlayer // 播放器实例
    iconElement!: HTMLElement // 图标节点
    mountTarget!: HTMLElement // 挂载节点
    toolBarOptions: Record<string,ToolBarOptions>
    constructor(player: DzPlayer) {
        this.player = player
        this.toolBarOptions = player.options.toolBars || {}
        this.initToolBar()
    }
    private initToolBar = () => {
        Object.keys(this.toolBarOptions).forEach((key) => {
            this.createElement(key,this.toolBarOptions[key])
        });
    }
    private createElement = (key:string,toolBar: ToolBarOptions) => {
        this.mountTarget = this.player.videoContainer.querySelector(".control-bar-right") as HTMLElement;
        if(toolBar.position && toolBar.position == "left"){
            this.mountTarget = this.player.videoContainer.querySelector(".control-bar-left") as HTMLElement;
        }
        this.iconElement = document.createElement('div')
        this.iconElement.setAttribute("title",toolBar.title);
        this.iconElement.className = `dz-player-custom-icon ${key} ${toolBar.icon}`
        if(toolBar.style){
            this.iconElement.setAttribute("style",toolBar.style);
        }
        if(toolBar.text){
            this.iconElement.innerHTML = `<span>${toolBar.text}</span>`;
        }
        this.mountTarget.appendChild(this.iconElement);
        // 将newChild插入到parentElement的子节点列表的开头
        if(toolBar.position && toolBar.position == "left"){
            this.mountTarget.appendChild(this.iconElement);
        } else {
            this.mountTarget.insertBefore(this.iconElement, this.mountTarget.firstChild); 
        }
        this.iconElement.addEventListener("click",()=>{
            toolBar.click && toolBar.click(this.player)
        });
    }
}