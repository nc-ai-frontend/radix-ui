"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn, prefix } from "@react-monorepo/ui";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof DialogPrimitive.Close>) => (
  <DialogPrimitive.Close
    className={cn(prefix + "dialog-close", className)}
    {...props}
  />
);
DialogClose.displayName = DialogPrimitive.Overlay.displayName;

const DialogOverlay = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    className={cn(prefix + "dialog-overlay", className)}
    {...props}
  />
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogContentProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Content
> & {
  closeButton?: boolean;
};

const DialogContent = ({
  children,
  className,
  closeButton = false,
  ...props
}: DialogContentProps) => (
  <DialogPrimitive.Content
    className={cn(prefix + "dialog-content", className)}
    {...props}
  >
    {children}
    {closeButton && (
      <DialogClose>
        <X
          style={{
            height: "26px",
            width: "26px",
          }}
        />
        <span className="sr-only">Close</span>
      </DialogClose>
    )}
  </DialogPrimitive.Content>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div className={cn(prefix + "dialog-header", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div className={cn(prefix + "dialog-footer", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title
    className={cn(prefix + "dialog-title", className)}
    {...props}
  />
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description
    className={cn(prefix + "dialog-description", className)}
    {...props}
  />
);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

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
} & DialogPrimitive.DialogProps &
  DialogContentProps;

const Dialog = ({
  // Custom Props
  trigger,
  closeButton = false,
  overlay = true,
  title,
  description,
  cancelLabel,
  onCancel,
  actionLabel,
  onAction,

  children,
  ...props
}: DialogProps) => {
  const handleClickCancel = async () => {
    if (typeof onCancel === "function") {
      await onCancel();
    }
  };

  const handleClickAction = async () => {
    if (typeof onAction === "function") {
      await onAction();
    }
  };

  return (
    <DialogRoot {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        {overlay && <DialogOverlay />}
        <DialogContent {...props} closeButton={closeButton}>
          <div className={cn(prefix + "dialog-content-wrapper")}>
            {(title || description) && (
              <DialogHeader>
                {title && <DialogTitle>{title}</DialogTitle>}
                {description && (
                  <DialogDescription>{description}</DialogDescription>
                )}
              </DialogHeader>
            )}
            {children}
            {(cancelLabel || actionLabel) && (
              <DialogFooter>
                {cancelLabel && (
                  <DialogClose asChild>
                    <button
                      className={cn(prefix + "dialog-close-cancel")}
                      onClick={handleClickCancel}
                    >
                      {cancelLabel}
                    </button>
                  </DialogClose>
                )}
                {actionLabel && (
                  <DialogClose asChild>
                    <button
                      className={cn(prefix + "dialog-close-action")}
                      onClick={handleClickAction}
                    >
                      {actionLabel}
                    </button>
                  </DialogClose>
                )}
              </DialogFooter>
            )}
          </div>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
};

export {
  Dialog,
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  type DialogProps,
};
