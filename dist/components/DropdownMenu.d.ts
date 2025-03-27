import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
declare const DropdownMenuRoot: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: ({ children, className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubTrigger>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
interface DropdownMenuSubTriggerProps extends React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubTrigger> {
    inset?: boolean;
}
declare const DropdownMenuSubTrigger: {
    ({ inset, children, className, ...props }: DropdownMenuSubTriggerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuSubContent: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubContent>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuContent: {
    ({ sideOffset, className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuItem: {
    ({ inset, className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Item> & {
        inset?: boolean;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuCheckboxItem: {
    ({ children, checked, className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.CheckboxItem>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuRadioItem: {
    ({ children, className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.RadioItem>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuLabel: {
    ({ inset, className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Label> & {
        inset?: boolean;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuSeparator: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Separator>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup, };
//# sourceMappingURL=DropdownMenu.d.ts.map