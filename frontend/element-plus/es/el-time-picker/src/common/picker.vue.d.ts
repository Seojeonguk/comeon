import type { Options } from '@popperjs/core';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<any>;
        validator: (val: string) => boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Options>;
        default: () => {};
    };
    modelValue: {
        type: import("vue").PropType<string | Date | Date[]>;
        default: string;
    };
    rangeSeparator: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    defaultValue: {
        type: import("vue").PropType<Date | Date[]>;
    };
    defaultTime: {
        type: import("vue").PropType<Date | Date[]>;
    };
    isRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    shortcuts: {
        type: ArrayConstructor;
        default: () => any[];
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    unlinkPanels: BooleanConstructor;
}, {
    elPopperOptions: Options;
    isDatesPicker: import("vue").ComputedRef<boolean>;
    handleEndChange: () => void;
    handleStartChange: () => void;
    handleStartInput: (event: any) => void;
    handleEndInput: (event: any) => void;
    onUserInput: (e: any) => void;
    handleChange: () => void;
    handleKeydown: (event: any) => void;
    popperPaneRef: import("vue").ComputedRef<any>;
    onClickOutside: () => void;
    pickerSize: import("vue").ComputedRef<any>;
    isRangeInput: import("vue").ComputedRef<boolean>;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    onClearIconClick: (event: any) => void;
    showClose: import("vue").Ref<boolean>;
    triggerClass: import("vue").ComputedRef<string>;
    onPick: (date?: any, visible?: boolean) => void;
    handleFocus: (e: any) => void;
    handleBlur: () => void;
    pickerVisible: import("vue").Ref<boolean>;
    pickerActualVisible: import("vue").Ref<boolean>;
    displayValue: import("vue").ComputedRef<any>;
    parsedValue: import("vue").ComputedRef<any>;
    setSelectionRange: (start: any, end: any, pos: any) => void;
    refPopper: any;
    pickerDisabled: import("vue").ComputedRef<any>;
    onSetPickerOption: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "focus" | "blur")[], "update:modelValue" | "change" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: string | unknown[];
    popperClass: string;
    type: string;
    clearable: boolean;
    clearIcon: string;
    editable: boolean;
    prefixIcon: string;
    readonly: boolean;
    disabled: boolean;
    placeholder: string;
    popperOptions: Options;
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
    unlinkPanels: boolean;
} & {
    format?: string;
    valueFormat?: string;
    size?: unknown;
    startPlaceholder?: string;
    endPlaceholder?: string;
    defaultValue?: Date | Date[];
    defaultTime?: Date | Date[];
    disabledHours?: Function;
    disabledMinutes?: Function;
    disabledSeconds?: Function;
    disabledDate?: Function;
    cellClassName?: Function;
}>, {
    name: string | unknown[];
    popperClass: string;
    type: string;
    clearable: boolean;
    clearIcon: string;
    editable: boolean;
    prefixIcon: string;
    readonly: boolean;
    disabled: boolean;
    placeholder: string;
    popperOptions: Options;
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
    unlinkPanels: boolean;
}>;
export default _default;
