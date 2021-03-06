import { ISliderInitData, ISliderProps } from './slider.type';
export declare const useSlide: (props: ISliderProps, initData: ISliderInitData, emit: any) => {
    elFormItem: any;
    slider: any;
    firstButton: any;
    secondButton: any;
    sliderDisabled: import("vue").ComputedRef<any>;
    minValue: import("vue").ComputedRef<number>;
    maxValue: import("vue").ComputedRef<number>;
    runwayStyle: import("vue").ComputedRef<CSSStyleDeclaration>;
    barStyle: import("vue").ComputedRef<CSSStyleDeclaration>;
    resetSize: () => void;
    setPosition: (percent: number) => void;
    emitChange: () => Promise<void>;
    onSliderClick: (event: MouseEvent) => void;
};
