import * as React from 'react';
import { ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
declare const AccordionRoot: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Accordion: React.ForwardRefExoticComponent<((Omit<AccordionPrimitive.AccordionSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<AccordionPrimitive.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & {
    items: ({
        trigger: ReactNode;
        content: ReactNode;
    } & AccordionPrimitive.AccordionItemProps)[];
}) & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent, };
//# sourceMappingURL=Accordion.d.ts.map