'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import { cn, prefix } from '@react-monorepo/ui';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ToastPrimitives.Viewport>) => (
  <ToastPrimitives.Viewport
    className={cn(prefix + 'toast-viewport', className)}
    {...props}
  />
);
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ToastPrimitives.Root>) => {
  return (
    <ToastPrimitives.Root
      className={cn(prefix + 'toast-root', className)}
      {...props}
    />
  );
};
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ToastPrimitives.Action>) => (
  <ToastPrimitives.Action
    className={cn(prefix + 'toast-action', className)}
    {...props}
  />
);
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ToastPrimitives.Close>) => (
  <ToastPrimitives.Close
    className={cn(prefix + 'toast-close', className)}
    toast-close=""
    {...props}
  >
    <X />
  </ToastPrimitives.Close>
);
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ToastPrimitives.Title>) => (
  <ToastPrimitives.Title
    className={cn(prefix + 'toast-title', className)}
    {...props}
  />
);
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ToastPrimitives.Description>) => (
  <ToastPrimitives.Description
    className={cn(prefix + 'toast-description', className)}
    {...props}
  />
);
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
