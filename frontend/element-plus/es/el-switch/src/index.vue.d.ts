import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    activeIconClass: {
        type: StringConstructor;
        default: string;
    };
    inactiveIconClass: {
        type: StringConstructor;
        default: string;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    inactiveValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: StringConstructor;
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeChange: PropType<() => (Promise<boolean> | boolean)>;
}, {
    input: any;
    core: any;
    switchDisabled: import("vue").ComputedRef<boolean>;
    checked: import("vue").ComputedRef<boolean>;
    handleChange: () => void;
    switchValue: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input")[], "update:modelValue" | "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: string | number | boolean;
    modelValue: string | number | boolean;
    disabled: boolean;
    width: number;
    activeIconClass: string;
    inactiveIconClass: string;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
    name: string;
    validateEvent: boolean;
    loading: boolean;
} & {
    id?: string;
    beforeChange?: () => (Promise<boolean> | boolean);
}>, {
    value: string | number | boolean;
    modelValue: string | number | boolean;
    disabled: boolean;
    width: number;
    activeIconClass: string;
    inactiveIconClass: string;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
    name: string;
    validateEvent: boolean;
    loading: boolean;
}>;
export default _default;
