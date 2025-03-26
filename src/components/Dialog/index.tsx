"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn, prefix } from "@react-monorepo/ui";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = ({
  className,
  ...props
}: DialogPrimitive.DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    className={cn(prefix + "dialog-overlay", className)}
    {...props}
  />
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = ({
  children,
  className,
  closeButton,
  ...props
}: DialogPrimitive.DialogContentProps & {
  closeButton?: boolean;
}) => (
  <DialogPrimitive.Content
    className={cn(prefix + "dialog-content", className)}
    {...props}
  >
    {children}
    {closeButton && (
      <DialogPrimitive.Close
        className={cn(prefix + "dialog-content-close", className)}
      >
        <X
          style={{
            height: "1rem",
            width: "1rem",
          }}
        />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    )}
  </DialogPrimitive.Content>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(prefix + "dialog-header", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(prefix + "dialog-footer", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = ({
  className,
  ...props
}: DialogPrimitive.DialogTitleProps) => (
  <DialogPrimitive.Title
    className={cn(prefix + "dialog-title", className)}
    {...props}
  />
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({
  className,
  ...props
}: DialogPrimitive.DialogDescriptionProps) => (
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
} & DialogPrimitive.DialogProps &
  DialogPrimitive.DialogContentProps;

const Dialog = ({
  // Custom Props
  trigger,
  closeButton = false,
  overlay = true,

  children,
  ...props
}: DialogProps) => {
  return (
    <DialogRoot {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        {overlay && <DialogOverlay />}
        <DialogContent {...props} closeButton={closeButton}>
          {children}
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
