import * as React from 'react';
import { cn, prefix } from '@react-monorepo/ui';

interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'destructive' | 'outline' | 'secondary';
  size?: 'sm' | 'lg' | 'icon';
}

function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    // @ts-expect-error lol
    <div
      data-variant={variant}
      className={cn(prefix + 'badge', className)}
      {...props}
    />
  );
}

export default Badge;
