'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn, prefix } from '@react-monorepo/ui';

const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(prefix + 'toggle-group', className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(prefix + 'toggle-group-item', className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
