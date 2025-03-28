"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn, prefix } from "@react-monorepo/ui";

const Slider = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SliderPrimitive.Root>) => (
  <SliderPrimitive.Root
    className={cn(prefix + "slider", className)}
    {...props}
    data-disabled={props.disabled}
  >
    <SliderPrimitive.Track
      className={cn(prefix + "slider-track")}
      data-disabled={props.disabled}
    >
      <SliderPrimitive.Range className={cn(prefix + "slider-range")} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(prefix + "slider-thumb")} />
  </SliderPrimitive.Root>
);

Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
