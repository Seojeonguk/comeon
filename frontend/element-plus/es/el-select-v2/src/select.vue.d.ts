declare const _default: import("vue").DefineComponent<{
    allowCreate: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"none" | "both" | "list" | "inline">;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    collapseTags: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    disabled: BooleanConstructor;
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: any;
    };
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    id: StringConstructor;
    loading: BooleanConstructor;
    loadingText: StringConstructor;
    label: StringConstructor;
    modelValue: import("vue").PropType<any>;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    name: StringConstructor;
    noDataText: StringConstructor;
    noMatchText: StringConstructor;
    remoteMethod: FunctionConstructor;
    reserveKeyword: BooleanConstructor;
    options: {
        type: import("vue").PropType<import("./select.types").OptionType<any>[]>;
        required: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
    remote: BooleanConstructor;
    size: {
        type: import("vue").PropType<any>;
        validator: (val: string) => boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
}, {
    collapseTagSize: import("vue").ComputedRef<any>;
    currentPlaceholder: import("vue").ComputedRef<string>;
    expanded: import("vue").Ref<boolean>;
    emptyText: import("vue").ComputedRef<string | false>;
    popupHeight: import("vue").ComputedRef<number>;
    debounce: import("vue").ComputedRef<0 | 300>;
    filteredOptions: import("vue").ComputedRef<any[]>;
    iconClass: import("vue").ComputedRef<"" | "arrow-up is-reverse" | "arrow-up">;
    inputWrapperStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    popperSize: import("vue").ComputedRef<any>;
    shouldShowPlaceholder: import("vue").ComputedRef<boolean>;
    selectDisabled: import("vue").ComputedRef<any>;
    selectSize: import("vue").ComputedRef<any>;
    showClearBtn: import("vue").ComputedRef<boolean>;
    states: {
        inputValue: string;
        displayInputValue: string;
        calculatedWidth: number;
        cachedPlaceholder: string;
        cachedOptions: {
            [x: string]: any;
            label: string;
            created?: boolean;
            value: any;
        }[];
        createdOptions: {
            [x: string]: any;
            label: string;
            created?: boolean;
            value: any;
        }[];
        createdLabel: string;
        createdSelected: boolean;
        currentPlaceholder: string;
        hoveringIndex: number;
        comboBoxHovering: boolean;
        isOnComposition: boolean;
        isSilentBlur: boolean;
        isComposing: boolean;
        inputLength: number;
        inputWidth: number;
        initialInputHeight: number;
        previousQuery: any;
        query: string;
        selectedLabel: string;
        softFocus: boolean;
        tagInMultiLine: boolean;
    };
    calculatorRef: import("vue").Ref<HTMLElement>;
    controlRef: any;
    inputRef: any;
    menuRef: any;
    popper: any;
    selectRef: any;
    selectionRef: any;
    popperRef: import("vue").ComputedRef<any>;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
    debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
    deleteTag: (event: MouseEvent, tag: import("./select.types").Option<any>) => void;
    getLabel: (item: unknown) => any;
    getValueKey: (item: unknown) => unknown;
    handleBlur: () => void;
    handleClear: () => void;
    handleClickOutside: () => void;
    handleDel: (e: KeyboardEvent) => void;
    handleEsc: () => void;
    handleFocus: (event: FocusEvent) => void;
    handleInputBoxClick: () => void;
    handleMenuEnter: () => void;
    toggleMenu: () => void;
    scrollTo: (index: number) => void;
    onCompositionUpdate: (e: CompositionEvent) => void;
    onInput: () => void;
    onKeyboardNavigate: (direction: "forward" | "backward") => void;
    onKeyboardSelect: () => void;
    onSelect: (option: import("./select.types").Option<any>, idx: number, byClick?: boolean) => void;
    onUpdateInputValue: (val: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "remove-tag" | "clear" | "visible-change" | "focus" | "blur")[], "update:modelValue" | "change" | "remove-tag" | "clear" | "visible-change" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    allowCreate: boolean;
    autocomplete: "none" | "both" | "list" | "inline";
    automaticDropdown: boolean;
    clearable: boolean;
    clearIcon: string;
    collapseTags: boolean;
    defaultFirstOption: boolean;
    disabled: boolean;
    filterable: boolean;
    height: number;
    itemHeight: number;
    loading: boolean;
    multiple: boolean;
    multipleLimit: number;
    reserveKeyword: boolean;
    popperAppendToBody: boolean;
    popperClass: string;
    popperOptions: Record<string, any>;
    remote: boolean;
    valueKey: string;
} & {
    estimatedOptionHeight?: number;
    filterMethod?: Function;
    id?: string;
    loadingText?: string;
    label?: string;
    modelValue?: unknown;
    name?: string;
    noDataText?: string;
    noMatchText?: string;
    remoteMethod?: Function;
    options?: import("./select.types").OptionType<any>[];
    placeholder?: string;
    size?: unknown;
}>, {
    allowCreate: boolean;
    autocomplete: "none" | "both" | "list" | "inline";
    automaticDropdown: boolean;
    clearable: boolean;
    clearIcon: string;
    collapseTags: boolean;
    defaultFirstOption: boolean;
    disabled: boolean;
    estimatedOptionHeight: number;
    filterable: boolean;
    height: number;
    itemHeight: number;
    loading: boolean;
    multiple: boolean;
    multipleLimit: number;
    reserveKeyword: boolean;
    popperAppendToBody: boolean;
    popperClass: string;
    popperOptions: Record<string, any>;
    remote: boolean;
    valueKey: string;
}>;
export default _default;
