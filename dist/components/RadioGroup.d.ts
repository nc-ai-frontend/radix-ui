import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
declare const RadioGroupRoot: ({ ...props }: React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const RadioGroupItem: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Item>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type Props = RadioGroupPrimitive.RadioGroupProps & {
    items: (RadioGroupPrimitive.RadioGroupItemProps & {
        label?: string;
    })[];
};
declare const RadioGroup: {
    ({ className, items, ...props }: Props): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { RadioGroupRoot, RadioGroup, RadioGroupItem };
//# sourceMappingURL=RadioGroup.d.ts.map