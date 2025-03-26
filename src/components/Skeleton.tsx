import { cn, prefix } from '@react-monorepo/ui';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(prefix + 'skeleton', className)} {...props} />;
}

export { Skeleton };
