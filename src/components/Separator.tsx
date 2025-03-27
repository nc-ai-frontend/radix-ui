"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn, prefix } from "@";

type SeparatorProps = SeparatorPrimitive.SeparatorProps & {};

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={cn(
      prefix + "separator",
      prefix + "separator-" + orientation,
      className
    )}
    {...props}
  />
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;
