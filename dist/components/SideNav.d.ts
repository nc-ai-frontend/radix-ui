import { ComponentProps } from 'react';
type Item = {
    id?: string;
    title: string;
    items?: Item[];
};
declare const SideNavHeader: ({ title }: {
    title: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const SideNavSubItems: ({ items, iteration, }: {
    items: (ComponentProps<"a"> & Item)[];
    iteration?: number;
}) => import("react/jsx-runtime").JSX.Element;
declare const SideNavItem: ({ item }: {
    item: Item;
}) => import("react/jsx-runtime").JSX.Element;
declare const SideNavSection: ({ item }: {
    item: Item;
}) => import("react/jsx-runtime").JSX.Element;
declare const SideNav: ({ items }: {
    items: Item[];
}) => import("react/jsx-runtime").JSX.Element;
export { SideNavHeader, SideNavSubItems, SideNavItem, SideNavSection, SideNav };
//# sourceMappingURL=SideNav.d.ts.map