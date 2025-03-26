export interface DialogContextType {
    openDialog: (id: string) => void;
    closeDialog: (id: string) => void;
    isOpen: (id: string) => boolean;
}
export declare const DialogContext: import("react").Context<DialogContextType>;
//# sourceMappingURL=Context.d.ts.map