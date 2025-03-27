import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
declare const AlertDialogRoot: React.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Overlay>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const AlertDialogContent: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Title>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const AlertDialogDescription: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Description>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const AlertDialogAction: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Action>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const AlertDialogCancel: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type Props = React.ComponentPropsWithRef<"div"> & {};
declare const AlertDialogFooter: ({ children, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
type AlertDialogProps = {
    trigger: React.ReactNode;
    description: string;
    actionLabel: string;
    title?: string;
    cancelLabel?: string;
    onClickCancel?: () => Promise<void> | void;
    onClickAction?: () => Promise<void> | void;
} & AlertDialogPrimitive.AlertDialogProps & AlertDialogPrimitive.AlertDialogContentProps;
declare const AlertDialog: ({ trigger, description, actionLabel, title, cancelLabel, onClickAction, onClickCancel, ...props }: AlertDialogProps) => import("react/jsx-runtime").JSX.Element;
export { AlertDialogRoot, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, AlertDialogFooter, AlertDialog, };
//# sourceMappingURL=AlertDialog.d.ts.map