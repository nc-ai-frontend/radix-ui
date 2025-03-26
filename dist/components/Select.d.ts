import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
declare const SelectRoot: React.FC<SelectPrimitive.SelectProps>;
declare const SelectPortal: React.FC<SelectPrimitive.SelectPortalProps>;
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectTrigger: {
    ({ children, className, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectValue: {
    ({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectContent: {
    ({ children, position, className, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectLabel: {
    ({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectItem: {
    ({ children, className, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectSeparator: {
    ({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectGroup: ({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) => import("react/jsx-runtime").JSX.Element;
export { SelectRoot, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, SelectPortal, SelectGroup, };
//# sourceMappingURL=Select.d.ts.map