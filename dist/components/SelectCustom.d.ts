import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
type SelectItemProps = SelectPrimitive.SelectItemProps & {
    text?: string;
};
type SelectGroupProps = {
    groups: {
        items: SelectItemProps[];
        label?: string;
    }[];
};
type SelectWrapperProps = SelectPrimitive.SelectProps & SelectPrimitive.SelectContentProps & {
    placeholder?: string;
    width?: React.CSSProperties['width'];
    isPortal?: boolean;
};
declare const Select: ({ groups, ...props }: SelectWrapperProps & SelectGroupProps) => import("react/jsx-runtime").JSX.Element;
export { Select };
//# sourceMappingURL=SelectCustom.d.ts.map