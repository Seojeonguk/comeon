import type { PropType } from 'vue';
import type { Trigger } from './use-target-events';
export declare type Effect = 'light' | 'dark';
export declare type Offset = [number, number] | number;
export declare const DARK_EFFECT = "dark";
export declare const LIGHT_EFFECT = "light";
export declare const usePopperControlProps: {
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
    };
    popperOptions: {
        type: PropType<import("@popperjs/core").Options>;
        default: () => {
            fallbackPlacements: any[];
            strategy: string;
            modifiers: ({
                name: string;
                options: {
                    offset: number[];
                    padding?: undefined;
                    fallbackPlacements?: undefined;
                    gpuAcceleration?: undefined;
                    adaptive?: undefined;
                };
            } | {
                name: string;
                options: {
                    padding: {
                        top: number;
                        bottom: number;
                        left: number;
                        right: number;
                    };
                    offset?: undefined;
                    fallbackPlacements?: undefined;
                    gpuAcceleration?: undefined;
                    adaptive?: undefined;
                };
            } | {
                name: string;
                options: {
                    padding: number;
                    fallbackPlacements: any[];
                    offset?: undefined;
                    gpuAcceleration?: undefined;
                    adaptive?: undefined;
                };
            } | {
                name: string;
                options: {
                    gpuAcceleration: boolean;
                    adaptive: boolean;
                    offset?: undefined;
                    padding?: undefined;
                    fallbackPlacements?: undefined;
                };
            })[];
        };
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare const usePopperProps: {
    autoClose: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    class: StringConstructor;
    style: ObjectConstructor;
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<Effect>;
        default: string;
    };
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    manualMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAfter: {
        type: NumberConstructor;
        default: number;
    };
    pure: {
        type: BooleanConstructor;
        default: boolean;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: PropType<Trigger>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    stopPopperMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
    };
    popperOptions: {
        type: PropType<import("@popperjs/core").Options>;
        default: () => {
            fallbackPlacements: any[];
            strategy: string;
            modifiers: ({
                name: string;
                options: {
                    offset: number[];
                    padding?: undefined;
                    fallbackPlacements?: undefined;
                    gpuAcceleration?: undefined;
                    adaptive?: undefined;
                };
            } | {
                name: string;
                options: {
                    padding: {
                        top: number;
                        bottom: number;
                        left: number;
                        right: number;
                    };
                    offset?: undefined;
                    fallbackPlacements?: undefined;
                    gpuAcceleration?: undefined;
                    adaptive?: undefined;
                };
            } | {
                name: string;
                options: {
                    padding: number;
                    fallbackPlacements: any[];
                    offset?: undefined;
                    gpuAcceleration?: undefined;
                    adaptive?: undefined;
                };
            } | {
                name: string;
                options: {
                    gpuAcceleration: boolean;
                    adaptive: boolean;
                    offset?: undefined;
                    padding?: undefined;
                    fallbackPlacements?: undefined;
                };
            })[];
        };
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare const usePopper: () => {
    render: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
