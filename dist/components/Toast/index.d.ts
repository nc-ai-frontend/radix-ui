import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
declare const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitives.Viewport>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const Toast: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitives.Root>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const ToastAction: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitives.Action>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const ToastClose: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitives.Close>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const ToastTitle: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitives.Title>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const ToastDescription: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitives.Description>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type ToastProps = React.ComponentPropsWithRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;
export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, };
//# sourceMappingURL=index.d.ts.map