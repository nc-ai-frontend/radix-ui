import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
declare const DialogRoot: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Close>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogOverlay: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Overlay>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type DialogContentProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Content> & {
    closeButton?: boolean;
};
declare const DialogContent: {
    ({ children, className, closeButton, ...props }: DialogContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogHeader: {
    ({ className, ...props }: React.ComponentPropsWithRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.ComponentPropsWithRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Title>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogDescription: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Description>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type DialogProps = {
    trigger: React.ReactNode;
    closeButton?: boolean;
    overlay?: boolean;
    title?: string;
    description?: string;
    cancelLabel?: string;
    onCancel?: () => Promise<void> | void;
    actionLabel?: string;
    onAction?: () => Promise<void> | void;
} & DialogPrimitive.DialogProps & DialogContentProps;
declare const Dialog: ({ trigger, closeButton, overlay, title, description, cancelLabel, onCancel, actionLabel, onAction, children, ...props }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export { Dialog, DialogRoot, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, type DialogProps, };
//# sourceMappingURL=index.d.ts.map