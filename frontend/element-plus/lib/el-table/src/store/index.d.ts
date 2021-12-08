import { Ref } from 'vue';
import { TableColumnCtx } from '../table-column/defaults';
import { Filter, Sort } from '../table/defaults';
interface WatcherPropsData<T> {
    data: Ref<T[]>;
    rowKey: Ref<string>;
}
declare function useStore<T>(): {
    mutations: {
        setData(states: {
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, data: T[]): void;
        insertColumn(states: {
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, column: TableColumnCtx<T>, parent: TableColumnCtx<T>): void;
        removeColumn(states: {
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, column: TableColumnCtx<T>, parent: TableColumnCtx<T>): void;
        sort(states: {
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, options: Sort): void;
        changeSortCondition(states: {
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, options: Sort): void;
        filterChange(_states: {
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        }, options: Filter<T>): void;
        toggleAllSelection(): void;
        rowSelectedChanged(_states: any, row: T): void;
        setHoverRow(states: {
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
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
        _currentRowKey: Ref<string>;
        currentRow: Ref<T>;
        expandRowKeys: Ref<string[]>;
        treeData: Ref<unknown>;
        indent: Ref<number>;
        lazy: Ref<boolean>;
        lazyTreeNodeMap: Ref<{}>;
        lazyColumnIdentifier: Ref<string>;
        childrenColumnName: Ref<string>;
        expandRows: Ref<T[]>;
        defaultExpandAll: Ref<boolean>;
        rowKey: Ref<string>;
        data: Ref<T[]>;
        _data: Ref<T[]>;
        isComplex: Ref<boolean>;
        _columns: Ref<TableColumnCtx<T>[]>;
        originColumns: Ref<TableColumnCtx<T>[]>;
        columns: Ref<TableColumnCtx<T>[]>;
        fixedColumns: Ref<TableColumnCtx<T>[]>;
        rightFixedColumns: Ref<TableColumnCtx<T>[]>;
        leafColumns: Ref<TableColumnCtx<T>[]>;
        fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
        rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
        leafColumnsLength: Ref<number>;
        fixedLeafColumnsLength: Ref<number>;
        rightFixedLeafColumnsLength: Ref<number>;
        isAllSelected: Ref<boolean>;
        selection: Ref<T[]>;
        reserveSelection: Ref<boolean>;
        selectOnIndeterminate: Ref<boolean>;
        selectable: Ref<(row: T, index: number) => boolean>;
        filters: Ref<StoreFilter>;
        filteredData: any;
        sortingColumn: any;
        sortProp: any;
        sortOrder: any;
        hoverRow: any;
    };
};
export default useStore;
declare class HelperStore<T> {
    Return: {
        mutations: {
            setData(states: {
                _currentRowKey: Ref<string>;
                currentRow: Ref<T>;
                expandRowKeys: Ref<string[]>;
                treeData: Ref<unknown>;
                indent: Ref<number>;
                lazy: Ref<boolean>;
                lazyTreeNodeMap: Ref<{}>;
                lazyColumnIdentifier: Ref<string>;
                childrenColumnName: Ref<string>;
                expandRows: Ref<T[]>;
                defaultExpandAll: Ref<boolean>;
                rowKey: Ref<string>;
                data: Ref<T[]>;
                _data: Ref<T[]>;
                isComplex: Ref<boolean>;
                _columns: Ref<TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                leafColumnsLength: Ref<number>;
                fixedLeafColumnsLength: Ref<number>;
                rightFixedLeafColumnsLength: Ref<number>;
                isAllSelected: Ref<boolean>;
                selection: Ref<T[]>;
                reserveSelection: Ref<boolean>;
                selectOnIndeterminate: Ref<boolean>;
                selectable: Ref<(row: T, index: number) => boolean>;
                filters: Ref<StoreFilter>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, data: T[]): void;
            insertColumn(states: {
                _currentRowKey: Ref<string>;
                currentRow: Ref<T>;
                expandRowKeys: Ref<string[]>;
                treeData: Ref<unknown>;
                indent: Ref<number>;
                lazy: Ref<boolean>;
                lazyTreeNodeMap: Ref<{}>;
                lazyColumnIdentifier: Ref<string>;
                childrenColumnName: Ref<string>;
                expandRows: Ref<T[]>;
                defaultExpandAll: Ref<boolean>;
                rowKey: Ref<string>;
                data: Ref<T[]>;
                _data: Ref<T[]>;
                isComplex: Ref<boolean>;
                _columns: Ref<TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                leafColumnsLength: Ref<number>;
                fixedLeafColumnsLength: Ref<number>;
                rightFixedLeafColumnsLength: Ref<number>;
                isAllSelected: Ref<boolean>;
                selection: Ref<T[]>;
                reserveSelection: Ref<boolean>;
                selectOnIndeterminate: Ref<boolean>;
                selectable: Ref<(row: T, index: number) => boolean>;
                filters: Ref<StoreFilter>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, column: TableColumnCtx<T>, parent: TableColumnCtx<T>): void;
            removeColumn(states: {
                _currentRowKey: Ref<string>;
                currentRow: Ref<T>;
                expandRowKeys: Ref<string[]>;
                treeData: Ref<unknown>;
                indent: Ref<number>;
                lazy: Ref<boolean>;
                lazyTreeNodeMap: Ref<{}>;
                lazyColumnIdentifier: Ref<string>;
                childrenColumnName: Ref<string>;
                expandRows: Ref<T[]>;
                defaultExpandAll: Ref<boolean>;
                rowKey: Ref<string>;
                data: Ref<T[]>;
                _data: Ref<T[]>;
                isComplex: Ref<boolean>;
                _columns: Ref<TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                leafColumnsLength: Ref<number>;
                fixedLeafColumnsLength: Ref<number>;
                rightFixedLeafColumnsLength: Ref<number>;
                isAllSelected: Ref<boolean>;
                selection: Ref<T[]>;
                reserveSelection: Ref<boolean>;
                selectOnIndeterminate: Ref<boolean>;
                selectable: Ref<(row: T, index: number) => boolean>;
                filters: Ref<StoreFilter>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, column: TableColumnCtx<T>, parent: TableColumnCtx<T>): void;
            sort(states: {
                _currentRowKey: Ref<string>;
                currentRow: Ref<T>;
                expandRowKeys: Ref<string[]>;
                treeData: Ref<unknown>;
                indent: Ref<number>;
                lazy: Ref<boolean>;
                lazyTreeNodeMap: Ref<{}>;
                lazyColumnIdentifier: Ref<string>;
                childrenColumnName: Ref<string>;
                expandRows: Ref<T[]>;
                defaultExpandAll: Ref<boolean>;
                rowKey: Ref<string>;
                data: Ref<T[]>;
                _data: Ref<T[]>;
                isComplex: Ref<boolean>;
                _columns: Ref<TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                leafColumnsLength: Ref<number>;
                fixedLeafColumnsLength: Ref<number>;
                rightFixedLeafColumnsLength: Ref<number>;
                isAllSelected: Ref<boolean>;
                selection: Ref<T[]>;
                reserveSelection: Ref<boolean>;
                selectOnIndeterminate: Ref<boolean>;
                selectable: Ref<(row: T, index: number) => boolean>;
                filters: Ref<StoreFilter>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, options: Sort): void;
            changeSortCondition(states: {
                _currentRowKey: Ref<string>;
                currentRow: Ref<T>;
                expandRowKeys: Ref<string[]>;
                treeData: Ref<unknown>;
                indent: Ref<number>;
                lazy: Ref<boolean>;
                lazyTreeNodeMap: Ref<{}>;
                lazyColumnIdentifier: Ref<string>;
                childrenColumnName: Ref<string>;
                expandRows: Ref<T[]>;
                defaultExpandAll: Ref<boolean>;
                rowKey: Ref<string>;
                data: Ref<T[]>;
                _data: Ref<T[]>;
                isComplex: Ref<boolean>;
                _columns: Ref<TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                leafColumnsLength: Ref<number>;
                fixedLeafColumnsLength: Ref<number>;
                rightFixedLeafColumnsLength: Ref<number>;
                isAllSelected: Ref<boolean>;
                selection: Ref<T[]>;
                reserveSelection: Ref<boolean>;
                selectOnIndeterminate: Ref<boolean>;
                selectable: Ref<(row: T, index: number) => boolean>;
                filters: Ref<StoreFilter>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, options: Sort): void;
            filterChange(_states: {
                _currentRowKey: Ref<string>;
                currentRow: Ref<T>;
                expandRowKeys: Ref<string[]>;
                treeData: Ref<unknown>;
                indent: Ref<number>;
                lazy: Ref<boolean>;
                lazyTreeNodeMap: Ref<{}>;
                lazyColumnIdentifier: Ref<string>;
                childrenColumnName: Ref<string>;
                expandRows: Ref<T[]>;
                defaultExpandAll: Ref<boolean>;
                rowKey: Ref<string>;
                data: Ref<T[]>;
                _data: Ref<T[]>;
                isComplex: Ref<boolean>;
                _columns: Ref<TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                leafColumnsLength: Ref<number>;
                fixedLeafColumnsLength: Ref<number>;
                rightFixedLeafColumnsLength: Ref<number>;
                isAllSelected: Ref<boolean>;
                selection: Ref<T[]>;
                reserveSelection: Ref<boolean>;
                selectOnIndeterminate: Ref<boolean>;
                selectable: Ref<(row: T, index: number) => boolean>;
                filters: Ref<StoreFilter>;
                filteredData: any;
                sortingColumn: any;
                sortProp: any;
                sortOrder: any;
                hoverRow: any;
            }, options: Filter<T>): void;
            toggleAllSelection(): void;
            rowSelectedChanged(_states: any, row: T): void;
            setHoverRow(states: {
                _currentRowKey: Ref<string>;
                currentRow: Ref<T>;
                expandRowKeys: Ref<string[]>;
                treeData: Ref<unknown>;
                indent: Ref<number>;
                lazy: Ref<boolean>;
                lazyTreeNodeMap: Ref<{}>;
                lazyColumnIdentifier: Ref<string>;
                childrenColumnName: Ref<string>;
                expandRows: Ref<T[]>;
                defaultExpandAll: Ref<boolean>;
                rowKey: Ref<string>;
                data: Ref<T[]>;
                _data: Ref<T[]>;
                isComplex: Ref<boolean>;
                _columns: Ref<TableColumnCtx<T>[]>;
                originColumns: Ref<TableColumnCtx<T>[]>;
                columns: Ref<TableColumnCtx<T>[]>;
                fixedColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedColumns: Ref<TableColumnCtx<T>[]>;
                leafColumns: Ref<TableColumnCtx<T>[]>;
                fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
                leafColumnsLength: Ref<number>;
                fixedLeafColumnsLength: Ref<number>;
                rightFixedLeafColumnsLength: Ref<number>;
                isAllSelected: Ref<boolean>;
                selection: Ref<T[]>;
                reserveSelection: Ref<boolean>;
                selectOnIndeterminate: Ref<boolean>;
                selectable: Ref<(row: T, index: number) => boolean>;
                filters: Ref<StoreFilter>;
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
            _currentRowKey: Ref<string>;
            currentRow: Ref<T>;
            expandRowKeys: Ref<string[]>;
            treeData: Ref<unknown>;
            indent: Ref<number>;
            lazy: Ref<boolean>;
            lazyTreeNodeMap: Ref<{}>;
            lazyColumnIdentifier: Ref<string>;
            childrenColumnName: Ref<string>;
            expandRows: Ref<T[]>;
            defaultExpandAll: Ref<boolean>;
            rowKey: Ref<string>;
            data: Ref<T[]>;
            _data: Ref<T[]>;
            isComplex: Ref<boolean>;
            _columns: Ref<TableColumnCtx<T>[]>;
            originColumns: Ref<TableColumnCtx<T>[]>;
            columns: Ref<TableColumnCtx<T>[]>;
            fixedColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedColumns: Ref<TableColumnCtx<T>[]>;
            leafColumns: Ref<TableColumnCtx<T>[]>;
            fixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            rightFixedLeafColumns: Ref<TableColumnCtx<T>[]>;
            leafColumnsLength: Ref<number>;
            fixedLeafColumnsLength: Ref<number>;
            rightFixedLeafColumnsLength: Ref<number>;
            isAllSelected: Ref<boolean>;
            selection: Ref<T[]>;
            reserveSelection: Ref<boolean>;
            selectOnIndeterminate: Ref<boolean>;
            selectable: Ref<(row: T, index: number) => boolean>;
            filters: Ref<StoreFilter>;
            filteredData: any;
            sortingColumn: any;
            sortProp: any;
            sortOrder: any;
            hoverRow: any;
        };
    };
}
declare type StoreFilter = Record<string, string[]>;
declare type Store<T> = HelperStore<T>['Return'];
export type { WatcherPropsData, Store, StoreFilter };