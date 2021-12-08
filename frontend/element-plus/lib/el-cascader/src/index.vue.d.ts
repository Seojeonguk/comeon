import { Ref } from 'vue';
import type { ComputedRef } from 'vue';
declare const _default: import("vue").DefineComponent<{}, {
    popperOptions: {
        modifiers: {
            name: string;
            enabled: boolean;
            phase: string;
            fn: ({ state }: {
                state: any;
            }) => void;
            requires: string[];
        }[];
    };
    popper: any;
    popperPaneRef: ComputedRef<any>;
    input: any;
    tagWrapper: any;
    panel: any;
    suggestionPanel: any;
    popperVisible: Ref<boolean>;
    inputHover: Ref<boolean>;
    inputPlaceholder: ComputedRef<any>;
    filtering: Ref<boolean>;
    presentText: ComputedRef<any>;
    checkedValue: import("vue").WritableComputedRef<unknown>;
    inputValue: Ref<string>;
    searchInputValue: Ref<string>;
    presentTags: Ref<any[]>;
    suggestions: Ref<any[]>;
    isDisabled: ComputedRef<any>;
    realSize: ComputedRef<string>;
    tagSize: ComputedRef<"small" | "mini">;
    multiple: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    clearBtnVisible: ComputedRef<boolean>;
    t: (...args: any[]) => string;
    togglePopperVisible: (visible?: boolean) => void;
    hideSuggestionPanel: () => void;
    deleteTag: (tag: any) => void;
    focusFirstNode: () => void;
    getCheckedNodes: (leafOnly: boolean) => any;
    handleExpandChange: (value: any) => void;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleClear: () => void;
    handleSuggestionClick: (node: any) => void;
    handleDelete: () => void;
    handleInput: (val: string, e: KeyboardEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "focus" | "blur" | "visible-change" | "expand-change" | "remove-tag")[], "update:modelValue" | "change" | "focus" | "blur" | "visible-change" | "expand-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;