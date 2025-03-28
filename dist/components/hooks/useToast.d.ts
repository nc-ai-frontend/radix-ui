import { ToastActionElement, ToastProps } from "../Toast";
type ToasterToast = ToastProps & {
    text: string;
    id: string;
    close?: boolean;
    action?: ToastActionElement;
    state?: "success" | "error" | "info";
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType["ADD_TOAST"];
    toast: ToasterToast;
} | {
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType["DISMISS_TOAST"];
    toastId?: ToasterToast["id"];
} | {
    type: ActionType["REMOVE_TOAST"];
    toastId?: ToasterToast["id"];
};
interface State {
    toasts: ToasterToast[];
}
export declare const reducer: (state: State, action: Action) => State;
declare function toast({ ...props }: Omit<ToasterToast, "id">): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};
export { useToast, toast };
//# sourceMappingURL=useToast.d.ts.map