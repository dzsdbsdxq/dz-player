export declare const throttle: (fn: Function, delay: number) => (...args: any[]) => void;
export declare const debounce: (fn: Function, delay: number) => (...args: any[]) => void;
export declare const formatTime: (secondTime: number, fractionDigits?: number) => string;
export declare const isMobile: boolean;
export declare const isFirefox: boolean;
export declare const isChrome: boolean;
export declare const isSafari: boolean;
export declare const isIE: boolean;
export declare const isEdge: boolean;
export declare const storage: {
    set: (key: string, value: string) => void;
    get: (key: string) => string | null;
};
export declare const nameMap: {
    dragStart: string;
    dragMove: string;
    dragEnd: string;
};
export declare const secondToTime: (second: number) => string;
export declare const color2Number: (color: string) => number;
export declare const number2Color: (number: number) => string;
export declare const getTransform: (str: string) => any;
export declare const setTransform: (obj: Record<string, any>) => string;
declare const _default: {
    isMobile: boolean;
    isFirefox: boolean;
    isChrome: boolean;
    storage: {
        set: (key: string, value: string) => void;
        get: (key: string) => string | null;
    };
    nameMap: {
        dragStart: string;
        dragMove: string;
        dragEnd: string;
    };
    secondToTime: (second: number) => string;
    color2Number: (color: string) => number;
    number2Color: (number: number) => string;
    getTransform: (str: string) => any;
    setTransform: (obj: Record<string, any>) => string;
};
export default _default;
