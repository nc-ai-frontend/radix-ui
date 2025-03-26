'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn, prefix } from '@react-monorepo/ui';

const Switch = (
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  ref: React.Ref<HTMLButtonElement>,
) => (
  <SwitchPrimitives.Root
    className={cn(prefix + 'switch', className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cn(prefix + 'switch-thumb')} />
  </SwitchPrimitives.Root>
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
