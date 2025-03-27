"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn, prefix } from "@";

const AlertDialogRoot = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Overlay>) => (
  <AlertDialogPrimitive.Overlay
    className={cn(prefix + "alert-dialog-overlay", className)}
    {...props}
  />
);
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Content>) => (
  <AlertDialogPrimitive.Content
    className={cn(prefix + "alert-dialog-content", className)}
    {...props}
  />
);
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogTitle = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Title>) => (
  <AlertDialogPrimitive.Title
    className={cn(prefix + "alert-dialog-title", className)}
    {...props}
  />
);
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Description>) => (
  <AlertDialogPrimitive.Description
    className={cn(prefix + "alert-dialog-description", className)}
    {...props}
  />
);
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Action>) => (
  <AlertDialogPrimitive.Action
    className={cn(prefix + "alert-dialog-action", className)}
    {...props}
  />
);
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel>) => (
  <AlertDialogPrimitive.Cancel
    className={cn(prefix + "alert-dialog-cancel", className)}
    data-variant="outline"
    {...props}
  />
);
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

type Props = React.ComponentPropsWithRef<"div"> & {};

const AlertDialogFooter = ({ children, ...props }: Props) => {
  return (
    <div className="design-alert-dialog-footer" {...props}>
      {children}
    </div>
  );
};

type AlertDialogProps = {
  trigger: React.ReactNode;
  description: string;
  actionLabel: string;
  title?: string;
  cancelLabel?: string;
  onClickCancel?: () => Promise<void> | void;
  onClickAction?: () => Promise<void> | void;
} & AlertDialogPrimitive.AlertDialogProps &
  AlertDialogPrimitive.AlertDialogContentProps;

const AlertDialog = ({
  trigger,
  description,
  actionLabel = "Action",
  title,
  cancelLabel,
  onClickAction,
  onClickCancel,
  ...props
}: AlertDialogProps) => {
  const handleClickAction = async () => {
    if (typeof onClickAction === "function") {
      await onClickAction();
    }
  };

  const handleClickCancel = async () => {
    if (typeof onClickCancel === "function") {
      await onClickCancel();
    }
  };
  return (
    <AlertDialogRoot {...props}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent {...props}>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <div className="design-alert-dialog-footer">
            {cancelLabel && (
              <AlertDialogCancel onClick={handleClickCancel}>
                {cancelLabel}
              </AlertDialogCancel>
            )}
            <AlertDialogAction onClick={handleClickAction}>
              {actionLabel}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialogRoot>
  );
};

export {
  AlertDialogRoot,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialog,
};
