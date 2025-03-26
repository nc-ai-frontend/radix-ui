'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn, prefix } from '@react-monorepo/ui';

const HoverCardRoot = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ align = 'center', sideOffset = 4, className, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(prefix + 'hover-card-content', className)}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCardRoot, HoverCardTrigger, HoverCardContent };
