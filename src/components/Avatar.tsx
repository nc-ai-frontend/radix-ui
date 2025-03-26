'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn, prefix } from '@react-monorepo/ui';

const AvatarRoot = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(prefix + 'avatar', className)}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(prefix + 'avatar-image', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(prefix + 'avatar-fallback', className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = React.forwardRef<
  HTMLSpanElement,
  AvatarPrimitive.AvatarProps &
    AvatarPrimitive.AvatarImageProps &
    AvatarPrimitive.AvatarFallbackProps & {
      fallbackText?: string;
    }
>(({ src, alt, fallbackText, ...props }, ref) => (
  <AvatarRoot ref={ref} {...props}>
    <AvatarImage src={src} alt={alt} />
    {fallbackText && (
      <AvatarFallback
        delayMs={props.delayMs || props.delayMs === 0 ? props.delayMs : 600}
      >
        {fallbackText}
      </AvatarFallback>
    )}
  </AvatarRoot>
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

export { Avatar, AvatarRoot, AvatarImage, AvatarFallback };
