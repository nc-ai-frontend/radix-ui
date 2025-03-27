"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@";

type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps;

type DropdownMenuWrapperProps = DropdownMenuPrimitive.DropdownMenuProps &
  DropdownMenuPrimitive.DropdownMenuContentProps & {
    trigger: React.ReactNode;
    isPortal?: boolean;
  };

const DropdownMenuWrapper = ({
  trigger,
  isPortal = true,
  children,
  ...props
}: DropdownMenuWrapperProps) => {
  return (
    <DropdownMenuRoot {...props}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      {isPortal ? (
        <DropdownMenuPortal>
          <DropdownMenuContent {...props}>{children}</DropdownMenuContent>
        </DropdownMenuPortal>
      ) : (
        <DropdownMenuContent {...props}>{children}</DropdownMenuContent>
      )}
    </DropdownMenuRoot>
  );
};

type DropdownMenuGroupProps = {
  groups: { items: DropdownMenuItemProps[]; label?: string }[];
};

type DropdownMenuProps = DropdownMenuGroupProps & DropdownMenuWrapperProps;

const DropdownMenu = ({ groups, ...props }: DropdownMenuProps) => {
  return (
    <DropdownMenuWrapper {...props}>
      {groups.map(({ items, label }, idx) => (
        <React.Fragment key={`group-${idx}`}>
          <DropdownMenuGroup>
            {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
            {items.map((item, iidx) => (
              <DropdownMenuItem {...item} key={`group-${idx}-item-${iidx}`}>
                {item.children}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </React.Fragment>
      ))}
    </DropdownMenuWrapper>
  );
};

export { DropdownMenu };
