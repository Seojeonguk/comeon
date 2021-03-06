import { ComputedRef, PropType, Ref, ComponentInternalInstance } from 'vue';
declare type BeforeLeave = (newTabName: string, oldTabName: string) => void | Promise<void> | boolean;
export declare type ITabType = 'card' | 'border-card' | '';
declare type ITabPosition = 'top' | 'right' | 'bottom' | 'left';
export interface IETabsProps {
    type: ITabType;
    activeName: string;
    closable: boolean;
    addable: boolean;
    modelValue: string;
    editable: boolean;
    tabPosition: ITabPosition;
    beforeLeave: BeforeLeave;
    stretch: boolean;
}
export interface RootTabs {
    props: IETabsProps;
    currentName: Ref<string>;
}
export interface IEPaneProps {
    label: string;
    name: string;
    closable: boolean;
    disabled: boolean;
    lazy: boolean;
}
export interface Pane {
    uid: number;
    instance: ComponentInternalInstance;
    props: IEPaneProps;
    paneName: ComputedRef<string>;
    active: ComputedRef<boolean>;
    index: Ref<string>;
    isClosable: ComputedRef<boolean>;
}
export declare type UpdatePaneStateCallback = (pane: Pane) => void;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<ITabType>;
        default: string;
    };
    activeName: {
        type: StringConstructor;
        default: string;
    };
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    tabPosition: {
        type: PropType<ITabPosition>;
        default: string;
    };
    beforeLeave: {
        type: PropType<BeforeLeave>;
        default: any;
    };
    stretch: BooleanConstructor;
}, {
    nav$: Ref<import("vue").DefineComponent<{
        panes: {
            type: PropType<Pane[]>;
            default: () => Pane[];
        };
        currentName: {
            type: StringConstructor;
            default: string;
        };
        editable: BooleanConstructor;
        onTabClick: {
            type: PropType<(tab: Pane, tabName: string, ev: Event) => void>;
            default: () => void;
        };
        onTabRemove: {
            type: PropType<(tab: Pane, ev: Event) => void>;
            default: () => void;
        };
        type: {
            type: PropType<ITabType>;
            default: string;
        };
        stretch: BooleanConstructor;
    }, {
        rootTabs: RootTabs;
        scrollable: Ref<boolean | {
            next?: boolean;
            prev?: number;
        }>;
        navOffset: Ref<number>;
        isFocus: Ref<boolean>;
        focusable: Ref<boolean>;
        navScroll$: any;
        nav$: any;
        el$: any;
        sizeName: ComputedRef<"width" | "height">;
        navStyle: ComputedRef<{
            transform: string;
        }>;
        scrollPrev: () => void;
        scrollNext: () => void;
        scrollToActiveTab: () => void;
        update: () => void;
        changeTab: (e: any) => void;
        setFocus: () => void;
        removeFocus: () => void;
        visibilityChangeHandler: () => void;
        windowBlurHandler: () => void;
        windowFocusHandler: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        panes: Pane[];
        currentName: string;
        editable: boolean;
        onTabClick: (tab: Pane, tabName: string, ev: Event) => void;
        onTabRemove: (tab: Pane, ev: Event) => void;
        type: ITabType;
        stretch: boolean;
    } & {}>, {
        panes: Pane[];
        currentName: string;
        editable: boolean;
        onTabClick: (tab: Pane, tabName: string, ev: Event) => void;
        onTabRemove: (tab: Pane, ev: Event) => void;
        type: ITabType;
        stretch: boolean;
    }>>;
    handleTabClick: (tab: any, tabName: any, event: any) => void;
    handleTabRemove: (pane: any, ev: any) => void;
    handleTabAdd: () => void;
    currentName: Ref<string>;
    panes: Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("tab-click" | "edit" | "tab-remove" | "tab-add" | "input" | "update:modelValue")[], "tab-click" | "edit" | "tab-remove" | "tab-add" | "input" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    editable: boolean;
    type: ITabType;
    stretch: boolean;
    activeName: string;
    closable: boolean;
    addable: boolean;
    modelValue: string;
    tabPosition: ITabPosition;
} & {
    beforeLeave?: BeforeLeave;
}>, {
    editable: boolean;
    type: ITabType;
    stretch: boolean;
    activeName: string;
    closable: boolean;
    addable: boolean;
    modelValue: string;
    tabPosition: ITabPosition;
    beforeLeave: BeforeLeave;
}>;
export default _default;
