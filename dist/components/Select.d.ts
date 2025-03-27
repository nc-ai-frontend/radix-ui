import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
declare const SelectRoot: React.FC<SelectPrimitive.SelectProps>;
declare const SelectPortal: React.FC<SelectPrimitive.SelectPortalProps>;
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectTrigger: {
    ({ children, className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectValue: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Value>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectContent: {
    ({ children, position, className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectLabel: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Label>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectItem: {
    ({ children, className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Item>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectItemText: {
    ({ children, className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.ItemText>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectSeparator: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Separator>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectGroup: ({ className, children, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Group>) => import("react/jsx-runtime").JSX.Element;
export { SelectRoot, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectItemText, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, SelectPortal, SelectGroup, };
//# sourceMappingURL=Select.d.ts.map