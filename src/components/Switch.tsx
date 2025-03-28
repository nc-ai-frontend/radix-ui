"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn, prefix } from "@react-monorepo/ui";

const Switch = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SwitchPrimitives.Root>) => (
  <SwitchPrimitives.Root
    className={cn(prefix + "switch", className)}
    {...props}
  >
    <SwitchPrimitives.Thumb className={cn(prefix + "switch-thumb")} />
  </SwitchPrimitives.Root>
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
