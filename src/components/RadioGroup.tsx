"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { Label, cn, prefix } from "@react-monorepo/ui";

const RadioGroupRoot = ({
  ...props
}: React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Root>) => {
  return (
    <RadioGroupPrimitive.Root
      orientation={props.orientation}
      className={cn(prefix + "radio-group")}
      {...props}
    />
  );
};

const RadioGroupItem = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Item>) => {
  return (
    <RadioGroupPrimitive.Item
      className={cn(prefix + "radio-group-item", className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={cn(prefix + "radio-group-item-indicator")}
      >
        <Circle className={cn(prefix + "circle", className)} stroke="none" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

type Props = RadioGroupPrimitive.RadioGroupProps & {
  items: (RadioGroupPrimitive.RadioGroupItemProps & { label?: string })[];
};

const RadioGroup = ({ className, items, ...props }: Props) => (
  <RadioGroupRoot {...props}>
    {items.map(({ label, id, ...item }) => (
      <div className={prefix + "radio-with-label"} key={item.value}>
        <RadioGroupItem id={id} {...item} className={className} />
        <Label htmlFor={id}>{label ?? item.value}</Label>
      </div>
    ))}
  </RadioGroupRoot>
);

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export { RadioGroupRoot, RadioGroup, RadioGroupItem };
