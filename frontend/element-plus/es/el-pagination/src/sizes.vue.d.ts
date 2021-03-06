declare const _default: import("vue").DefineComponent<{
    pageSize: NumberConstructor;
    pageSizes: {
        type: ArrayConstructor;
        default: () => number[];
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}, {
    t: (...args: any[]) => string;
    innerPagesizes: import("vue").ComputedRef<unknown[]>;
    innerPageSize: any;
    handleChange: (val: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "page-size-change"[], "page-size-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pageSizes: unknown[];
    popperClass: string;
    disabled: boolean;
} & {
    pageSize?: number;
}>, {
    pageSizes: unknown[];
    popperClass: string;
    disabled: boolean;
}>;
export default _default;
