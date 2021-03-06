import { UPDATE_MODEL_EVENT } from '../../utils/constants';
import type { Ref, CSSProperties, SetupContext } from 'vue';
import type { UseDialogProps } from './dialog';
export declare const CLOSE_EVENT = "close";
export declare const OPEN_EVENT = "open";
export declare const CLOSED_EVENT = "closed";
export declare const OPENED_EVENT = "opened";
export { UPDATE_MODEL_EVENT };
export default function (props: UseDialogProps, ctx: SetupContext, targetRef: Ref<HTMLElement>): {
    afterEnter: () => void;
    afterLeave: () => void;
    beforeLeave: () => void;
    handleClose: () => void;
    onModalClick: () => void;
    closed: Ref<boolean>;
    dialogRef: any;
    style: import("vue").ComputedRef<CSSProperties>;
    rendered: Ref<boolean>;
    modalRef: Ref<HTMLElement>;
    visible: Ref<boolean>;
    zIndex: Ref<number>;
};
