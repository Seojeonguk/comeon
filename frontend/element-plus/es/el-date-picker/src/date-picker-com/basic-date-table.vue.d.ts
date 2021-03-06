import { PropType } from 'vue';
import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    date: {
        type: PropType<dayjs.Dayjs>;
    };
    minDate: {
        type: PropType<dayjs.Dayjs>;
    };
    maxDate: {
        type: PropType<dayjs.Dayjs>;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs | dayjs.Dayjs[]>;
    };
    selectionMode: {
        type: StringConstructor;
        default: string;
    };
    showWeekNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    rangeState: {
        type: ObjectConstructor;
        default: () => {
            endDate: any;
            selecting: boolean;
        };
    };
}, {
    handleMouseMove: (event: any) => void;
    t: (...args: any[]) => string;
    rows: import("vue").ComputedRef<any[][]>;
    isWeekActive: (cell: any) => boolean;
    getCellClasses: (cell: any) => string;
    WEEKS: import("vue").ComputedRef<any>;
    handleClick: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("changerange" | "pick" | "select")[], "changerange" | "pick" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    selectionMode: string;
    showWeekNumber: boolean;
    rangeState: Record<string, any>;
} & {
    date?: dayjs.Dayjs;
    minDate?: dayjs.Dayjs;
    maxDate?: dayjs.Dayjs;
    parsedValue?: dayjs.Dayjs | dayjs.Dayjs[];
    disabledDate?: Function;
    cellClassName?: Function;
}>, {
    selectionMode: string;
    showWeekNumber: boolean;
    rangeState: Record<string, any>;
}>;
export default _default;
