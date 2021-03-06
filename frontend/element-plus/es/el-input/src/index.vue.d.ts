import type { PropType } from 'vue';
declare type AutosizeProp = {
    minRows?: number;
    maxRows?: number;
} | boolean;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<any>;
        validator: (val: string) => boolean;
    };
    resize: {
        type: PropType<"none" | "both" | "horizontal" | "vertical">;
        validator: (val: string) => boolean;
    };
    autosize: {
        type: PropType<AutosizeProp>;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    form: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    maxlength: {
        type: (StringConstructor | NumberConstructor)[];
    };
}, {
    input: any;
    textarea: any;
    attrs: import("vue").Ref<{}>;
    inputSize: import("vue").ComputedRef<any>;
    validateState: import("vue").ComputedRef<any>;
    validateIcon: import("vue").ComputedRef<any>;
    computedTextareaStyle: import("vue").ComputedRef<{
        resize: "none" | "both" | "horizontal" | "vertical";
    }>;
    resizeTextarea: () => void;
    inputDisabled: import("vue").ComputedRef<any>;
    showClear: import("vue").ComputedRef<boolean>;
    showPwdVisible: import("vue").ComputedRef<boolean>;
    isWordLimitVisible: import("vue").ComputedRef<boolean>;
    textLength: import("vue").ComputedRef<number>;
    hovering: import("vue").Ref<boolean>;
    inputExceed: import("vue").ComputedRef<boolean>;
    passwordVisible: import("vue").Ref<boolean>;
    inputOrTextarea: import("vue").ComputedRef<any>;
    handleInput: (event: any) => void;
    handleChange: (event: any) => void;
    handleFocus: (event: any) => void;
    handleBlur: (event: any) => void;
    handleCompositionStart: () => void;
    handleCompositionUpdate: (event: any) => void;
    handleCompositionEnd: (event: any) => void;
    handlePasswordVisible: () => void;
    clear: () => void;
    select: () => void;
    focus: () => void;
    blur: () => void;
    getSuffixVisible: () => any;
    onMouseLeave: (e: any) => void;
    onMouseEnter: (e: any) => void;
    handleKeydown: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change" | "focus" | "blur" | "clear" | "mouseleave" | "mouseenter" | "keydown")[], "update:modelValue" | "input" | "change" | "focus" | "blur" | "clear" | "mouseleave" | "mouseenter" | "keydown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number;
    type: string;
    autosize: boolean;
    autocomplete: string;
    form: string;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    showPassword: boolean;
    showWordLimit: boolean;
    suffixIcon: string;
    prefixIcon: string;
    validateEvent: boolean;
    inputStyle: Record<string, any>;
} & {
    size?: unknown;
    resize?: "none" | "both" | "horizontal" | "vertical";
    placeholder?: string;
    label?: string;
    tabindex?: string | number;
    maxlength?: string | number;
}>, {
    modelValue: string | number;
    type: string;
    autosize: boolean;
    autocomplete: string;
    form: string;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    showPassword: boolean;
    showWordLimit: boolean;
    suffixIcon: string;
    prefixIcon: string;
    validateEvent: boolean;
    inputStyle: Record<string, any>;
}>;
export default _default;
