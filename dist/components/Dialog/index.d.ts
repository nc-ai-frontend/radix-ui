import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
declare const DialogRoot: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: {
    ({ className, ...props }: DialogPrimitive.DialogOverlayProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogContent: {
    ({ children, className, closeButton, ...props }: DialogPrimitive.DialogContentProps & {
        closeButton?: boolean;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: {
    ({ className, ...props }: DialogPrimitive.DialogTitleProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogDescription: {
    ({ className, ...props }: DialogPrimitive.DialogDescriptionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type DialogProps = {
    trigger: React.ReactNode;
    closeButton?: boolean;
    overlay?: boolean;
} & DialogPrimitive.DialogProps & DialogPrimitive.DialogContentProps;
declare const Dialog: ({ trigger, closeButton, overlay, children, ...props }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export { Dialog, DialogRoot, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, type DialogProps, };
//# sourceMappingURL=index.d.ts.map