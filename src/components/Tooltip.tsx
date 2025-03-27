"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn, prefix } from "@";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipArrow = TooltipPrimitive.Arrow;

const TooltipContent = ({
  sideOffset = 4,
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof TooltipPrimitive.Content>) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(prefix + "tooltip-content", className)}
    {...props}
  />
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

type CustomProps = {
  text: string;
  arrow?: boolean;
};

const Tooltip = ({
  text,
  arrow = true,
  children,
  defaultOpen,
  open,
  onOpenChange,
  delayDuration = 200,
  disableHoverableContent,
  className,
  ...props
}: TooltipPrimitive.TooltipProps &
  TooltipPrimitive.TooltipContentProps &
  CustomProps) => {
  return (
    <TooltipRoot
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          {...props}
          className={cn(prefix + "tooltip", className)}
        >
          <p>{text}</p>
          {arrow && <TooltipArrow className={prefix + "tooltip-arrow"} />}
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  );
};

export {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  Tooltip,
};
