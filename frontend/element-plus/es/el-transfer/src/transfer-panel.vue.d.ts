declare const _default: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    labelProp: import("vue").ComputedRef<string>;
    keyProp: import("vue").ComputedRef<string>;
    disabledProp: import("vue").ComputedRef<string>;
    filteredData: import("vue").ComputedRef<import("./transfer").DataItem[]>;
    checkedSummary: import("vue").ComputedRef<string>;
    isIndeterminate: import("vue").ComputedRef<boolean>;
    handleAllCheckedChange: (value: import("./transfer").Key[]) => void;
    checked: import("vue").Ref<any[]>;
    allChecked: import("vue").Ref<boolean>;
    query: import("vue").Ref<string>;
    inputHover: import("vue").Ref<boolean>;
    checkChangeByUser: import("vue").Ref<boolean>;
    hasNoMatch: import("vue").ComputedRef<boolean>;
    inputIcon: import("vue").ComputedRef<"circle-close" | "search">;
    hasFooter: import("vue").ComputedRef<boolean>;
    clearQuery: () => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked-change"[], "checked-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<({
    [x: number]: string;
} & {
    [Symbol.iterator]?: IterableIterator<string>;
    length?: number;
    toString?: string;
    toLocaleString?: string;
    concat?: string[];
    join?: string;
    slice?: string[];
    indexOf?: (searchElement: string, fromIndex?: number) => number;
    lastIndexOf?: (searchElement: string, fromIndex?: number) => number;
    every?: {
        <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[];
        (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean;
    };
    some?: (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean;
    forEach?: (callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void;
    map?: <U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[];
    filter?: {
        <S_1 extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S_1, thisArg?: any): S_1[];
        (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[];
    };
    reduce?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
        <U_1>(callbackfn: (previousValue: U_1, currentValue: string, currentIndex: number, array: readonly string[]) => U_1, initialValue: U_1): U_1;
    };
    reduceRight?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
        <U_2>(callbackfn: (previousValue: U_2, currentValue: string, currentIndex: number, array: readonly string[]) => U_2, initialValue: U_2): U_2;
    };
    find?: {
        <S_2 extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S_2, thisArg?: any): S_2;
        (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string;
    };
    findIndex?: (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number;
    entries?: IterableIterator<[number, string]>;
    keys?: IterableIterator<number>;
    values?: IterableIterator<string>;
    includes?: (searchElement: string, fromIndex?: number) => boolean;
    flatMap?: <U_3, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U_3 | readonly U_3[], thisArg?: This) => U_3[];
    flat?: unknown[];
}) | ({} & {
    [x: string]: unknown;
})>, {
    [x: number]: string;
} | {}>;
export default _default;
