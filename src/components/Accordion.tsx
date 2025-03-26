'use client';

import * as React from 'react';
import { ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn, prefix } from '@react-monorepo/ui';

const AccordionRoot = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(prefix + 'accordion-item', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Header className={prefix + 'accordion-primitive-header'}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(prefix + 'accordion-primitive-trigger', className)}
      {...props}
    >
      <div className={cn(prefix + 'accordion-trigger-title', className)}>
        {children}
      </div>
      <ChevronDownIcon
        className={cn(prefix + 'chevron-down-icon', className)}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(prefix + 'accordion-primitive-content', className)}
    {...props}
  >
    <div className={cn(prefix + 'accordion-content-div', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    items: ({
      trigger: ReactNode;
      content: ReactNode;
    } & AccordionPrimitive.AccordionItemProps)[];
  }
>(({ className, items, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(prefix + 'accordion', className, props.orientation)}
    {...props}
  >
    {items.map(({ trigger, content, ...itemProps }, index) => (
      <AccordionItem key={index} {...itemProps} className={props.orientation}>
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    ))}
  </AccordionPrimitive.Root>
));
Accordion.displayName = 'Accordion';

export {
  Accordion,
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
