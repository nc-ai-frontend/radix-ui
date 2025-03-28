"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn, prefix } from "@react-monorepo/ui";

const Toggle = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof TogglePrimitive.Root>) => (
  <TogglePrimitive.Root
    className={cn(prefix + "toggle", className)}
    {...props}
  ></TogglePrimitive.Root>
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
