import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps;
type DropdownMenuWrapperProps = DropdownMenuPrimitive.DropdownMenuProps & DropdownMenuPrimitive.DropdownMenuContentProps & {
    trigger: React.ReactNode;
    isPortal?: boolean;
};
type DropdownMenuGroupProps = {
    groups: {
        items: DropdownMenuItemProps[];
        label?: string;
    }[];
};
type DropdownMenuProps = DropdownMenuGroupProps & DropdownMenuWrapperProps;
declare const DropdownMenu: ({ groups, ...props }: DropdownMenuProps) => import("react/jsx-runtime").JSX.Element;
export { DropdownMenu };
//# sourceMappingURL=DropdownMenuCustom.d.ts.map