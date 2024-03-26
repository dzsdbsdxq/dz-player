declare module '*.css' {
    const css: string;
    export default css;
}
declare module '*.scss' {
    const css: string;
    export default css;
}
declare module '*.svg' {
    const src: string;
    export default src;
}
declare module '*.ejs' {
    const fn: (...arg: any) => string;
    export default fn;
}
