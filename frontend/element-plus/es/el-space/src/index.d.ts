declare const _default: import("vue").DefineComponent<{
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    class: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: string;
    };
    style: {
        type: import("vue").PropType<string | any[] | import("vue").CSSProperties>;
    };
    alignment: {
        type: import("vue").PropType<"">;
        default: string;
    };
    prefixCls: {
        type: StringConstructor;
    };
    spacer: {
        type: import("vue").PropType<import("vue").VNodeChild>;
        default: any;
        validator: (val: unknown) => boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<any>;
        validator: (val: unknown) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
    containerStyle: import("vue").ComputedRef<import("vue").CSSProperties[]>;
    itemStyle: import("vue").ComputedRef<{
        paddingBottom: string;
        marginRight: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction: "horizontal" | "vertical";
    class: string;
    alignment: "";
    wrap: boolean;
} & {
    style?: unknown;
    prefixCls?: string;
    spacer?: import("vue").VNodeChild;
    size?: unknown;
}>, {
    direction: "horizontal" | "vertical";
    class: string;
    alignment: "";
    spacer: import("vue").VNodeChild;
    wrap: boolean;
}>;
export default _default;
