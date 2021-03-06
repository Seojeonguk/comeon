import { PropType } from 'vue';
import { RootTabs, Pane, ITabType } from './tabs.vue';
declare const _default: import("vue").DefineComponent<{
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
    scrollable: import("vue").Ref<boolean | {
        next?: boolean;
        prev?: number;
    }>;
    navOffset: import("vue").Ref<number>;
    isFocus: import("vue").Ref<boolean>;
    focusable: import("vue").Ref<boolean>;
    navScroll$: any;
    nav$: any;
    el$: any;
    sizeName: import("vue").ComputedRef<"width" | "height">;
    navStyle: import("vue").ComputedRef<{
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
}>;
export default _default;
