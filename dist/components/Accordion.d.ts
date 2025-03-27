import * as React from "react";
import { ReactNode } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
declare const AccordionRoot: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: {
    ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitive.Item>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const AccordionTrigger: {
    ({ children, className, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const AccordionContent: {
    ({ children, className, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const Accordion: {
    ({ className, items, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitive.Root> & {
        items: ({
            trigger: ReactNode;
            content: ReactNode;
        } & AccordionPrimitive.AccordionItemProps)[];
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Accordion, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent, };
//# sourceMappingURL=Accordion.d.ts.map