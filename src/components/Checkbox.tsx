"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn, prefix } from "@react-monorepo/ui";

const Checkbox = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(prefix + "checkbox", className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(prefix + "checkbox-indicator", className)}
    >
      <Check className={cn(prefix + "checkbox-check", className)} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
