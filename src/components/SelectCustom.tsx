"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@react-monorepo/ui";

type SelectItemProps = SelectPrimitive.SelectItemProps & {
  text: string;
};

type SelectGroupProps = {
  groups: { items: SelectItemProps[]; label?: string }[];
};

type SelectWrapperProps = SelectPrimitive.SelectProps &
  SelectPrimitive.SelectContentProps & {
    placeholder?: string;
    width?: React.CSSProperties["width"];
    isPortal?: boolean;
  };

const SelectWrapper = ({
  // SelectProps
  value,
  defaultValue,
  onValueChange,
  open,
  defaultOpen,
  onOpenChange,
  dir,
  name,
  autoComplete,
  disabled,
  required,
  form,
  // CustomProps
  children,
  placeholder,
  width,
  isPortal = true,
  // SelectContentProps
  ...props
}: SelectWrapperProps) => {
  return (
    <SelectRoot
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      dir={dir}
      name={name}
      autoComplete={autoComplete}
      disabled={disabled}
      required={required}
      form={form}
    >
      <SelectTrigger style={{ width }}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      {isPortal ? (
        <SelectPortal>
          <SelectContent style={{ width }} {...props}>
            {children}
          </SelectContent>
        </SelectPortal>
      ) : (
        <SelectContent style={{ width }} {...props}>
          {children}
        </SelectContent>
      )}
    </SelectRoot>
  );
};

const Select = ({
  groups,
  ...props
}: SelectWrapperProps & SelectGroupProps) => {
  return (
    <SelectWrapper {...props}>
      {groups.map(({ label, items }, idx) => (
        <React.Fragment key={`group-${idx}`}>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {items.map((item) => (
              <SelectItem {...item} key={item.value}>
                <SelectItemText>{item.text}</SelectItemText>
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
        </React.Fragment>
      ))}
    </SelectWrapper>
  );
};

export { Select };
