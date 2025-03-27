"use client";

import * as React from "react";
import { ReactNode } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn, prefix } from "@";

const AccordionRoot = AccordionPrimitive.Root;

const AccordionItem = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(prefix + "accordion-item", className)}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  children,
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className={prefix + "accordion-primitive-header"}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(prefix + "accordion-primitive-trigger", className)}
      {...props}
    >
      <div className={cn(prefix + "accordion-trigger-title", className)}>
        {children}
      </div>
      <ChevronDownIcon
        className={cn(prefix + "chevron-down-icon", className)}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
  children,
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(prefix + "accordion-primitive-content", className)}
    {...props}
  >
    <div className={cn(prefix + "accordion-content-div", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const Accordion = ({
  className,
  items,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof AccordionPrimitive.Root> & {
  items: ({
    trigger: ReactNode;
    content: ReactNode;
  } & AccordionPrimitive.AccordionItemProps)[];
}) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(prefix + "accordion", className, props.orientation)}
    {...props}
  >
    {items.map(({ trigger, content, ...itemProps }, index) => (
      <AccordionItem key={index} {...itemProps} className={props.orientation}>
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    ))}
  </AccordionPrimitive.Root>
);
Accordion.displayName = "Accordion";

export {
  Accordion,
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
