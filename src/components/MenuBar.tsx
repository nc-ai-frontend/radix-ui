'use client';

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn, prefix } from '@react-monorepo/ui';

const MenubarMenu: typeof MenubarPrimitive.Menu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const MenubarRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(prefix + 'menubar', className)}
    {...props}
  />
));
MenubarRoot.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(prefix + 'menubar-trigger', className)}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ inset, children, className, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(prefix + 'menubar-sub-trigger', className)}
    style={{
      paddingLeft: inset ? '0.5rem' : '2rem',
    }}
    {...props}
  >
    {children}
    <ChevronRight
      style={{
        marginLeft: 'auto',
        width: '1rem',
        height: '1rem',
      }}
    />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(prefix + 'menubar-sub-content', className)}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { align = 'start', alignOffset = -4, sideOffset = 8, className, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(prefix + 'menubar-content', className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ inset, className, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(prefix + 'menubar-item', className)}
    style={{
      paddingLeft: inset ? '0.5rem' : '2rem',
    }}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ children, checked, className, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(prefix + 'menubar-checkbox-item', className)}
    checked={checked}
    {...props}
  >
    <span className={cn(prefix + 'menubar-checkbox-item-span', className)}>
      <MenubarPrimitive.ItemIndicator>
        <Check
          style={{
            height: '1rem',
            width: '1rem',
          }}
        />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(prefix + 'menubar-radio-item', className)}
    {...props}
  >
    <span className={cn(prefix + 'menubar-radio-item-span', className)}>
      <MenubarPrimitive.ItemIndicator>
        <Circle
          color="currentColor"
          style={{
            height: '0.5rem',
            width: '0.5rem',
          }}
        />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ inset, className, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(prefix + 'menubar-label', className)}
    style={{
      paddingLeft: inset ? '0.5rem' : '2rem',
    }}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(prefix + 'menubar-separator', className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn(prefix + 'menubar-shortcut', className)} {...props} />
  );
};
MenubarShortcut.displayname = 'MenubarShortcut';

export {
  MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
