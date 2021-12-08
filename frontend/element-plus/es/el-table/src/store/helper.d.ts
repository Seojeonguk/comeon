import { Table } from '../table/defaults';
import { TableProps } from '../table/defaults';
export declare function createStore<T>(table: Table<T>, props: TableProps<T>): {
    mutations: {
        setData(states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<T>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<T[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<T[]>;
            _data: import("vue").Ref<T[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<T[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: T, index: number) => boolean>;
            filters: import("vue").Ref<import("./index").StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, data: T[]): void;
        insertColumn(states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<T>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<T[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<T[]>;
            _data: import("vue").Ref<T[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<T[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: T, index: number) => boolean>;
            filters: import("vue").Ref<import("./index").StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, column: import("../table-column/defaults").TableColumnCtx<T>, parent: import("../table-column/defaults").TableColumnCtx<T>): void;
        removeColumn(states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<T>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<T[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<T[]>;
            _data: import("vue").Ref<T[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<T[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: T, index: number) => boolean>;
            filters: import("vue").Ref<import("./index").StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, column: import("../table-column/defaults").TableColumnCtx<T>, parent: import("../table-column/defaults").TableColumnCtx<T>): void;
        sort(states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<T>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<T[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<T[]>;
            _data: import("vue").Ref<T[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<T[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: T, index: number) => boolean>;
            filters: import("vue").Ref<import("./index").StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, options: import("../table/defaults").Sort): void;
        changeSortCondition(states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<T>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<T[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<T[]>;
            _data: import("vue").Ref<T[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<T[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: T, index: number) => boolean>;
            filters: import("vue").Ref<import("./index").StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, options: import("../table/defaults").Sort): void;
        filterChange(_states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<T>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<T[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<T[]>;
            _data: import("vue").Ref<T[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<T[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: T, index: number) => boolean>;
            filters: import("vue").Ref<import("./index").StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, options: import("../table/defaults").Filter<T>): void;
        toggleAllSelection(): void;
        rowSelectedChanged(_states: any, row: T): void;
        setHoverRow(states: {
            _currentRowKey: import("vue").Ref<string>;
            currentRow: import("vue").Ref<T>;
            expandRowKeys: import("vue").Ref<string[]>;
            treeData: import("vue").Ref<unknown>;
            indent: import("vue").Ref<number>;
            lazy: import("vue").Ref<boolean>;
            lazyTreeNodeMap: import("vue").Ref<{}>;
            lazyColumnIdentifier: import("vue").Ref<string>;
            childrenColumnName: import("vue").Ref<string>;
            expandRows: import("vue").Ref<T[]>;
            defaultExpandAll: import("vue").Ref<boolean>;
            rowKey: import("vue").Ref<string>;
            data: import("vue").Ref<T[]>;
            _data: import("vue").Ref<T[]>;
            isComplex: import("vue").Ref<boolean>;
            _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
            leafColumnsLength: import("vue").Ref<number>;
            fixedLeafColumnsLength: import("vue").Ref<number>;
            rightFixedLeafColumnsLength: import("vue").Ref<number>;
            isAllSelected: import("vue").Ref<boolean>;
            selection: import("vue").Ref<T[]>;
            reserveSelection: import("vue").Ref<boolean>;
            selectOnIndeterminate: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<(row: T, index: number) => boolean>;
            filters: import("vue").Ref<import("./index").StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, row: T): void;
        setCurrentRow(_states: any, row: T): void;
    };
    commit: (name: "setData" | "insertColumn" | "removeColumn" | "sort" | "changeSortCondition" | "filterChange" | "toggleAllSelection" | "rowSelectedChanged" | "setHoverRow" | "setCurrentRow", ...args: any[]) => void;
    updateTableScrollY: () => void;
    assertRowKey: () => void;
    updateColumns: () => void;
    scheduleLayout: (needUpdateColumns?: boolean, immediate?: boolean) => void;
    isSelected: (row: any) => boolean;
    clearSelection: () => void;
    cleanSelection: () => void;
    toggleRowSelection: (row: T, selected?: any, emitChange?: boolean) => void;
    _toggleAllSelection: () => void;
    toggleAllSelection: any;
    updateSelectionByRowKey: () => void;
    updateAllSelected: () => void;
    updateFilters: (columns: any, values: any) => {};
    updateCurrentRow: (_currentRow: T) => void;
    updateSort: (column: any, prop: any, order: any) => void;
    execFilter: () => void;
    execSort: () => void;
    execQuery: (ignore?: any) => void;
    clearFilter: (columnKeys: any) => void;
    clearSort: () => void;
    toggleRowExpansion: (row: T, expanded?: boolean) => void;
    setExpandRowKeysAdapter: (val: string[]) => void;
    setCurrentRowKey: (key: string) => void;
    toggleRowExpansionAdapter: (row: T, expanded: boolean) => void;
    isRowExpanded: (row: T) => boolean;
    updateExpandRows: () => void;
    updateCurrentRowData: () => void;
    loadOrToggle: (row: any) => void;
    states: {
        _currentRowKey: import("vue").Ref<string>;
        currentRow: import("vue").Ref<T>;
        expandRowKeys: import("vue").Ref<string[]>;
        treeData: import("vue").Ref<unknown>;
        indent: import("vue").Ref<number>;
        lazy: import("vue").Ref<boolean>;
        lazyTreeNodeMap: import("vue").Ref<{}>;
        lazyColumnIdentifier: import("vue").Ref<string>;
        childrenColumnName: import("vue").Ref<string>;
        expandRows: import("vue").Ref<T[]>;
        defaultExpandAll: import("vue").Ref<boolean>;
        rowKey: import("vue").Ref<string>;
        data: import("vue").Ref<T[]>;
        _data: import("vue").Ref<T[]>;
        isComplex: import("vue").Ref<boolean>;
        _columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        originColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        columns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        fixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        rightFixedColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        leafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        fixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        rightFixedLeafColumns: import("vue").Ref<import("../table-column/defaults").TableColumnCtx<T>[]>;
        leafColumnsLength: import("vue").Ref<number>;
        fixedLeafColumnsLength: import("vue").Ref<number>;
        rightFixedLeafColumnsLength: import("vue").Ref<number>;
        isAllSelected: import("vue").Ref<boolean>;
        selection: import("vue").Ref<T[]>;
        reserveSelection: import("vue").Ref<boolean>;
        selectOnIndeterminate: import("vue").Ref<boolean>;
        selectable: import("vue").Ref<(row: T, index: number) => boolean>;
        filters: import("vue").Ref<import("./index").StoreFilter>;
        filteredData: any;
        sortingColumn: any;
        sortProp: any;
        sortOrder: any;
        hoverRow: any;
    };
};
