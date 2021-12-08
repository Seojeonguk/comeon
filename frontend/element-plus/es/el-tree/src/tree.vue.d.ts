import { PropType, ComponentInternalInstance } from 'vue';
import Node from './model/node';
import { TreeNodeData, TreeKey, TreeData } from './tree.type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: ArrayConstructor;
    defaultExpandedKeys: ArrayConstructor;
    currentNodeKey: PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: ObjectConstructor;
        default(): {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: FunctionConstructor;
    filterNodeMethod: FunctionConstructor;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    iconClass: StringConstructor;
}, {
    store: import("vue").Ref<{
        currentNode: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: TreeNodeData) => void;
            readonly label: string;
            readonly key: TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: Node, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: Node | import("./tree.type").FakeNode, index?: number, batch?: boolean) => void;
            insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            removeChild: (child: Node) => void;
            removeChildByData: (data: TreeNodeData) => void;
            expand: (callback?: () => void, expandParent?: boolean) => void;
            doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
            getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        currentNodeKey: TreeKey;
        nodesMap: {
            [x: string]: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: TreeNodeData) => void;
                readonly label: string;
                readonly key: TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: Node, deep?: boolean) => boolean;
                remove: () => void;
                insertChild: (child?: Node | import("./tree.type").FakeNode, index?: number, batch?: boolean) => void;
                insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
                insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
                removeChild: (child: Node) => void;
                removeChildByData: (data: TreeNodeData) => void;
                expand: (callback?: () => void, expandParent?: boolean) => void;
                doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
                getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            };
        };
        root: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: TreeNodeData) => void;
            readonly label: string;
            readonly key: TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: Node, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: Node | import("./tree.type").FakeNode, index?: number, batch?: boolean) => void;
            insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            removeChild: (child: Node) => void;
            removeChildByData: (data: TreeNodeData) => void;
            expand: (callback?: () => void, expandParent?: boolean) => void;
            doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
            getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        data: {
            [x: string]: any;
        }[];
        lazy: boolean;
        load: import("./tree.type").LoadFunction;
        filterNodeMethod: import("./tree.type").FilterNodeMethodFunction;
        key: TreeKey;
        defaultCheckedKeys: TreeKey[];
        checkStrictly: boolean;
        defaultExpandedKeys: TreeKey[];
        autoExpandParent: boolean;
        defaultExpandAll: boolean;
        checkDescendants: boolean;
        props: {
            children: string;
            label: string;
            disabled: string;
            isLeaf?: boolean;
        };
        initialize: () => void;
        filter: (value: any) => void;
        setData: (newVal: TreeData) => void;
        getNode: (data: TreeNodeData | TreeKey) => Node;
        insertBefore: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
        insertAfter: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
        remove: (data: Node | TreeNodeData) => void;
        append: (data: TreeNodeData, parentData: Node | TreeNodeData | TreeKey) => void;
        _initDefaultCheckedNodes: () => void;
        _initDefaultCheckedNode: (node: Node) => void;
        setDefaultCheckedKey: (newVal: TreeKey[]) => void;
        registerNode: (node: Node) => void;
        deregisterNode: (node: Node) => void;
        getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
        getHalfCheckedNodes: () => TreeNodeData[];
        getHalfCheckedKeys: () => TreeKey[];
        _getAllNodes: () => Node[];
        updateChildren: (key: TreeKey, data: TreeData) => void;
        _setCheckedKeys: (key: TreeKey, leafOnly: boolean, checkedKeys: {
            [key: string]: boolean;
        }) => void;
        setCheckedNodes: (array: Node[], leafOnly?: boolean) => void;
        setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
        setDefaultExpandedKeys: (keys: TreeKey[]) => void;
        setChecked: (data: TreeNodeData | TreeKey, checked: boolean, deep: boolean) => void;
        getCurrentNode: () => Node;
        setCurrentNode: (currentNode: Node) => void;
        setUserCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
        setCurrentNodeKey: (key: TreeKey, shouldAutoExpandParent?: boolean) => void;
    }>;
    root: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: any;
            currentNodeKey: TreeKey;
            nodesMap: {
                [x: string]: any;
            };
            root: any;
            data: {
                [x: string]: any;
            }[];
            lazy: boolean;
            load: import("./tree.type").LoadFunction;
            filterNodeMethod: import("./tree.type").FilterNodeMethodFunction;
            key: TreeKey;
            defaultCheckedKeys: TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys: TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: {
                children: string;
                label: string;
                disabled: string;
                isLeaf?: boolean;
            };
            initialize: () => void;
            filter: (value: any) => void;
            setData: (newVal: TreeData) => void;
            getNode: (data: TreeNodeData | TreeKey) => Node;
            insertBefore: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
            insertAfter: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
            remove: (data: Node | TreeNodeData) => void;
            append: (data: TreeNodeData, parentData: Node | TreeNodeData | TreeKey) => void;
            _initDefaultCheckedNodes: () => void;
            _initDefaultCheckedNode: (node: Node) => void;
            setDefaultCheckedKey: (newVal: TreeKey[]) => void;
            registerNode: (node: Node) => void;
            deregisterNode: (node: Node) => void;
            getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
            getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
            getHalfCheckedNodes: () => TreeNodeData[];
            getHalfCheckedKeys: () => TreeKey[];
            _getAllNodes: () => Node[];
            updateChildren: (key: TreeKey, data: TreeData) => void;
            _setCheckedKeys: (key: TreeKey, leafOnly: boolean, checkedKeys: {
                [key: string]: boolean;
            }) => void;
            setCheckedNodes: (array: Node[], leafOnly?: boolean) => void;
            setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
            setDefaultExpandedKeys: (keys: TreeKey[]) => void;
            setChecked: (data: TreeNodeData | TreeKey, checked: boolean, deep: boolean) => void;
            getCurrentNode: () => Node;
            setCurrentNode: (currentNode: Node) => void;
            setUserCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
            setCurrentNodeKey: (key: TreeKey, shouldAutoExpandParent?: boolean) => void;
        };
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: TreeNodeData) => void;
        readonly label: string;
        readonly key: TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any;
        readonly previousSibling: any;
        contains: (target: Node, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: Node | import("./tree.type").FakeNode, index?: number, batch?: boolean) => void;
        insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        removeChild: (child: Node) => void;
        removeChildByData: (data: TreeNodeData) => void;
        expand: (callback?: () => void, expandParent?: boolean) => void;
        doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
        getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    currentNode: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: any;
            currentNodeKey: TreeKey;
            nodesMap: {
                [x: string]: any;
            };
            root: any;
            data: {
                [x: string]: any;
            }[];
            lazy: boolean;
            load: import("./tree.type").LoadFunction;
            filterNodeMethod: import("./tree.type").FilterNodeMethodFunction;
            key: TreeKey;
            defaultCheckedKeys: TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys: TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: {
                children: string;
                label: string;
                disabled: string;
                isLeaf?: boolean;
            };
            initialize: () => void;
            filter: (value: any) => void;
            setData: (newVal: TreeData) => void;
            getNode: (data: TreeNodeData | TreeKey) => Node;
            insertBefore: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
            insertAfter: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
            remove: (data: Node | TreeNodeData) => void;
            append: (data: TreeNodeData, parentData: Node | TreeNodeData | TreeKey) => void;
            _initDefaultCheckedNodes: () => void;
            _initDefaultCheckedNode: (node: Node) => void;
            setDefaultCheckedKey: (newVal: TreeKey[]) => void;
            registerNode: (node: Node) => void;
            deregisterNode: (node: Node) => void;
            getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
            getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
            getHalfCheckedNodes: () => TreeNodeData[];
            getHalfCheckedKeys: () => TreeKey[];
            _getAllNodes: () => Node[];
            updateChildren: (key: TreeKey, data: TreeData) => void;
            _setCheckedKeys: (key: TreeKey, leafOnly: boolean, checkedKeys: {
                [key: string]: boolean;
            }) => void;
            setCheckedNodes: (array: Node[], leafOnly?: boolean) => void;
            setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
            setDefaultExpandedKeys: (keys: TreeKey[]) => void;
            setChecked: (data: TreeNodeData | TreeKey, checked: boolean, deep: boolean) => void;
            getCurrentNode: () => Node;
            setCurrentNode: (currentNode: Node) => void;
            setUserCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
            setCurrentNodeKey: (key: TreeKey, shouldAutoExpandParent?: boolean) => void;
        };
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: TreeNodeData) => void;
        readonly label: string;
        readonly key: TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any;
        readonly previousSibling: any;
        contains: (target: Node, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: Node | import("./tree.type").FakeNode, index?: number, batch?: boolean) => void;
        insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        removeChild: (child: Node) => void;
        removeChildByData: (data: TreeNodeData) => void;
        expand: (callback?: () => void, expandParent?: boolean) => void;
        doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
        getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    dragState: import("vue").Ref<{
        showDropIndicator: boolean;
        draggingNode: any;
        dropNode: any;
        allowDrop: boolean;
        dropType: any;
    }>;
    el$: any;
    dropIndicator$: any;
    isEmpty: import("vue").ComputedRef<boolean>;
    filter: (value: any) => void;
    getNodeKey: (node: Node) => any;
    getNodePath: (data: TreeKey | TreeNodeData) => TreeNodeData[];
    getCheckedNodes: (leafOnly: boolean, includeHalfChecked: boolean) => TreeNodeData[];
    getCheckedKeys: (leafOnly: boolean) => TreeKey[];
    getCurrentNode: () => TreeNodeData;
    getCurrentKey: () => any;
    setCheckedNodes: (nodes: Node[], leafOnly: boolean) => void;
    setCheckedKeys: (keys: any, leafOnly: boolean) => void;
    setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
    getHalfCheckedNodes: () => TreeNodeData[];
    getHalfCheckedKeys: () => TreeKey[];
    setCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
    setCurrentKey: (key: TreeKey, shouldAutoExpandParent?: boolean) => void;
    t: (...args: any[]) => string;
    getNode: (data: TreeKey | TreeNodeData) => Node;
    remove: (data: TreeNodeData | Node) => void;
    append: (data: TreeNodeData, parentNode: TreeNodeData | TreeKey | Node) => void;
    insertBefore: (data: TreeNodeData, refNode: TreeKey | TreeNodeData) => void;
    insertAfter: (data: TreeNodeData, refNode: TreeKey | TreeNodeData) => void;
    handleNodeExpand: (nodeData: TreeNodeData, node: Node, instance: ComponentInternalInstance) => void;
    updateKeyChildren: (key: TreeKey, data: TreeData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("node-expand" | "check-change" | "current-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], "node-expand" | "check-change" | "current-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    props: Record<string, any>;
    accordion: boolean;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
    lazy: boolean;
    checkStrictly: boolean;
    autoExpandParent: boolean;
    defaultExpandAll: boolean;
    checkDescendants: boolean;
    expandOnClickNode: boolean;
    checkOnClickNode: boolean;
    draggable: boolean;
    highlightCurrent: boolean;
    indent: number;
} & {
    renderContent?: Function;
    data?: unknown[];
    currentNodeKey?: string | number;
    load?: Function;
    filterNodeMethod?: Function;
    defaultCheckedKeys?: unknown[];
    defaultExpandedKeys?: unknown[];
    emptyText?: string;
    nodeKey?: string;
    allowDrag?: Function;
    allowDrop?: Function;
    iconClass?: string;
}>, {
    props: Record<string, any>;
    accordion: boolean;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
    lazy: boolean;
    checkStrictly: boolean;
    autoExpandParent: boolean;
    defaultExpandAll: boolean;
    checkDescendants: boolean;
    expandOnClickNode: boolean;
    checkOnClickNode: boolean;
    draggable: boolean;
    highlightCurrent: boolean;
    indent: number;
}>;
export default _default;
