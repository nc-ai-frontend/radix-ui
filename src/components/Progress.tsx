'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn, prefix } from '@react-monorepo/ui';

const Progress = (
  {
    value,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  ref: React.Ref<HTMLDivElement>,
) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(prefix + 'progress', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(prefix + 'progress-indicator')}
      style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
    />
  </ProgressPrimitive.Root>
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
