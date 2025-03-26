import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
declare const RadioGroupRoot: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
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