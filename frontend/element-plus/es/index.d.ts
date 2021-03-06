import type { App } from 'vue';
export * from './components';
export * from './plugins';
export * from './composables';
declare const version = "1.0.2-beta.65";
declare const install: (app: App, opt: any) => void;
declare const locale: any;
export { version, install, locale, };
declare const _default: {
    version: string;
    install: (app: App<any>, opt: any) => void;
    locale: any;
};
export default _default;
