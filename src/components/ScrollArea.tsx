'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn, prefix } from '@react-monorepo/ui';

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(prefix + 'scroll-area', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className={cn(prefix + 'scroll-area-viewport', className)}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ orientation = 'vertical', className, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      prefix + 'scroll-bar',
      orientation === 'vertical'
        ? prefix + 'scroll-bar-vertical'
        : prefix + 'scroll-bar-horizontal',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={prefix + 'scroll-bar-thumb'}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
