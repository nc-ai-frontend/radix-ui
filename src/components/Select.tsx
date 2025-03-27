"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn, prefix } from "@";

const SelectRoot = SelectPrimitive.Root;
const SelectPortal = SelectPrimitive.Portal;
const SelectScrollUpButton = SelectPrimitive.ScrollUpButton;
const SelectScrollDownButton = SelectPrimitive.ScrollDownButton;

const SelectItemIndicator = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.ItemIndicator>) => (
  <SelectPrimitive.ItemIndicator
    className={cn(prefix + "select-item-indicator", className)}
    {...props}
  >
    {children}
  </SelectPrimitive.ItemIndicator>
);
SelectItemIndicator.displayName = SelectPrimitive.ItemIndicator.displayName;

const SelectTrigger = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Trigger>) => (
  <SelectPrimitive.Trigger
    className={cn(prefix + "select-trigger", className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className={cn(prefix + "select-icon")}>
      <ChevronDown style={{ width: "16px", height: "16px" }} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectValue = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Value>) => (
  <SelectPrimitive.Value
    className={cn(prefix + "select-value", className)}
    {...props}
  />
);
SelectValue.displayName = SelectPrimitive.Value.displayName;

const SelectContent = ({
  children,
  position = "popper",
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Content>) => (
  <SelectPrimitive.Content
    className={cn(prefix + "select-content", className)}
    position={position}
    sideOffset={4}
    {...props}
  >
    <SelectScrollUpButton className={cn(prefix + "select-scroll-up-button")}>
      <ChevronUp />
    </SelectScrollUpButton>
    <SelectPrimitive.Viewport
      className={cn(
        prefix + "select-primitive-viewport",
        position === "popper"
          ? prefix + "select-primitive-viewport-popper"
          : null,
        className
      )}
    >
      {children}
    </SelectPrimitive.Viewport>
    <SelectScrollDownButton
      className={cn(prefix + "select-scroll-down-button")}
    >
      <ChevronDown />
    </SelectScrollDownButton>
  </SelectPrimitive.Content>
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label
    className={cn(prefix + "select-label", className)}
    {...props}
  />
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item
    className={cn(prefix + "select-item", className)}
    {...props}
  >
    <SelectItemIndicator>
      <Check />
    </SelectItemIndicator>
    {children}
  </SelectPrimitive.Item>
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectItemText = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.ItemText>) => (
  <SelectPrimitive.ItemText {...props}>
    <div className={cn(prefix + "select-item-text", className)}>{children}</div>
  </SelectPrimitive.ItemText>
);
SelectItemText.displayName = SelectPrimitive.ItemText.displayName;

const SelectSeparator = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator
    className={cn(prefix + "select-separator", className)}
    {...props}
  />
);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectGroup = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Group>) => {
  return (
    <SelectPrimitive.SelectGroup
      className={cn(prefix + "select-group", className)}
      {...props}
    >
      {children}
    </SelectPrimitive.SelectGroup>
  );
};

export {
  SelectRoot,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectItemText,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectPortal,
  SelectGroup,
};
