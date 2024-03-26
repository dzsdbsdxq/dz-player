import { PlayerEventsEnum, VideoEventsEnum } from "../model/event";
import DzPlayer from "../player/PlayerUtil";
export type EventsList = keyof typeof VideoEventsEnum | keyof typeof PlayerEventsEnum;
export default class DzPlayEvents {
    events: {
        [key: string]: Function[];
    };
    player: DzPlayer;
    videoEvents: VideoEventsEnum[];
    playerEvents: PlayerEventsEnum[];
    constructor(player: DzPlayer);
    type(name: EventsList): "player" | "video" | null;
    on(name: EventsList, callback: (...arg: any) => void): void;
    off(name: EventsList, callback: () => void): void;
    emit(name: string, data?: any): void;
    once(name: EventsList, callback: (...arg: any) => void): void;
}
