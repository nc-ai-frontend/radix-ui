"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn, prefix } from "@";

const Label = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof LabelPrimitive.Root>) => (
  <LabelPrimitive.Root className={cn(prefix + "label", className)} {...props} />
);
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
