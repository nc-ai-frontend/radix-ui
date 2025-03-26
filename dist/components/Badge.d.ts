import * as React from 'react';
interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: 'destructive' | 'outline' | 'secondary';
    size?: 'sm' | 'lg' | 'icon';
}
declare function Badge({ variant, className, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map