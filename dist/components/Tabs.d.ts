import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
declare const TabsRoot: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof TabsPrimitive.List>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const TabsTrigger: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const TabsContent: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof TabsPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type TabsProps = {
    triggers: TabsPrimitive.TabsTriggerProps[];
} & TabsPrimitive.TabsProps;
declare const Tabs: ({ triggers, children, ...props }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export { TabsRoot, TabsList, TabsTrigger, TabsContent, Tabs };
//# sourceMappingURL=Tabs.d.ts.map