"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn, prefix } from "@react-monorepo/ui";

const TabsRoot = TabsPrimitive.Root;

const TabsList = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn(prefix + "tabs-list", className)}
    {...props}
  />
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={cn(prefix + "tabs-trigger", className)}
    {...props}
  />
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content
    className={cn(prefix + "tabs-content", className)}
    {...props}
  />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

type TabsProps = {
  triggers: TabsPrimitive.TabsTriggerProps[];
} & TabsPrimitive.TabsProps;

const Tabs = ({ triggers, children, ...props }: TabsProps) => (
  <TabsRoot {...props}>
    <TabsList>
      {triggers.map((el, idx) => (
        <TabsTrigger {...el} key={`trigger-${idx}`} />
      ))}
    </TabsList>
    {children}
  </TabsRoot>
);

export { TabsRoot, TabsList, TabsTrigger, TabsContent, Tabs };
