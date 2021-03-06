import { Ref } from 'vue';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputSize: {
        type: StringConstructor;
        default: string;
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: PropType<(val: number) => number | string>;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    tooltipClass: {
        type: StringConstructor;
        default: any;
    };
    marks: ObjectConstructor;
}, {
    firstValue: Ref<number>;
    secondValue: Ref<number>;
    oldValue: Ref<number>;
    dragging: Ref<boolean>;
    sliderSize: Ref<number>;
    slider: any;
    firstButton: any;
    secondButton: any;
    sliderDisabled: import("vue").ComputedRef<any>;
    runwayStyle: import("vue").ComputedRef<CSSStyleDeclaration>;
    barStyle: import("vue").ComputedRef<CSSStyleDeclaration>;
    emitChange: () => Promise<void>;
    onSliderClick: (event: MouseEvent) => void;
    getStopStyle: (position: number) => CSSStyleDeclaration;
    stops: import("vue").ComputedRef<number[]>;
    markList: import("vue").ComputedRef<import("./slider.type").Mark[]>;
    sliderWrapper: Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input")[], "update:modelValue" | "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: number | number[];
    vertical: boolean;
    showTooltip: boolean;
    min: number;
    max: number;
    step: number;
    showInput: boolean;
    showInputControls: boolean;
    inputSize: string;
    showStops: boolean;
    disabled: boolean;
    range: boolean;
    height: string;
    debounce: number;
} & {
    tooltipClass?: string;
    formatTooltip?: (val: number) => number | string;
    label?: string;
    marks?: Record<string, any>;
}>, {
    modelValue: number | number[];
    vertical: boolean;
    tooltipClass: string;
    showTooltip: boolean;
    min: number;
    max: number;
    step: number;
    showInput: boolean;
    showInputControls: boolean;
    inputSize: string;
    showStops: boolean;
    formatTooltip: (val: number) => number | string;
    disabled: boolean;
    range: boolean;
    height: string;
    debounce: number;
    label: string;
}>;
export default _default;
