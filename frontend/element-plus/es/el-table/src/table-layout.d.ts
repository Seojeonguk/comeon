import { Ref } from 'vue';
import { TableColumnCtx } from './table-column/defaults';
import { TableHeader } from './table-header/index';
import { Table } from './table/defaults';
import { Store } from './store/index';
declare class TableLayout<T> {
    observers: TableHeader[];
    table: Table<T>;
    store: Store<T>;
    columns: TableColumnCtx<T>[];
    fit: boolean;
    showHeader: boolean;
    height: Ref<null | number>;
    scrollX: Ref<boolean>;
    scrollY: Ref<boolean>;
    bodyWidth: Ref<null | number>;
    fixedWidth: Ref<null | number>;
    rightFixedWidth: Ref<null | number>;
    tableHeight: Ref<null | number>;
    headerHeight: Ref<null | number>;
    appendHeight: Ref<null | number>;
    footerHeight: Ref<null | number>;
    viewportHeight: Ref<null | number>;
    bodyHeight: Ref<null | number>;
    fixedBodyHeight: Ref<null | number>;
    gutterWidth: number;
    constructor(options: Record<string, any>);
    updateScrollY(): boolean;
    setHeight(value: string | number, prop?: string): any;
    setMaxHeight(value: string | number): void;
    getFlattenColumns(): TableColumnCtx<T>[];
    updateElsHeight(): any;
    headerDisplayNone(elm: HTMLElement): boolean;
    updateColumnsWidth(): void;
    addObserver(observer: TableHeader): void;
    removeObserver(observer: TableHeader): void;
    notifyObservers(event: string): void;
}
export default TableLayout;