declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: StringConstructor;
        default: string;
    };
    type: StringConstructor;
    size: {
        type: StringConstructor;
        default: string;
    };
    splitButton: BooleanConstructor;
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    effect: {
        type: StringConstructor;
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {
    visible: import("vue").Ref<boolean>;
    scrollbar: any;
    wrapStyle: import("vue").ComputedRef<string>;
    dropdownSize: import("vue").ComputedRef<any>;
    handlerMainButtonClick: (event: any) => void;
    triggerVnode: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visible-change" | "click" | "command")[], "visible-change" | "click" | "command", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    trigger: string;
    size: string;
    splitButton: boolean;
    hideOnClick: boolean;
    placement: string;
    showTimeout: number;
    hideTimeout: number;
    tabindex: string | number;
    effect: string;
    maxHeight: string | number;
} & {
    type?: string;
}>, {
    trigger: string;
    size: string;
    splitButton: boolean;
    hideOnClick: boolean;
    placement: string;
    showTimeout: number;
    hideTimeout: number;
    tabindex: string | number;
    effect: string;
    maxHeight: string | number;
}>;
export default _default;
