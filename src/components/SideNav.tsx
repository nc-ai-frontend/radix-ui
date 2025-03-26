import { ComponentProps, Fragment } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  cn,
  prefix,
} from '@react-monorepo/ui';

type Item = {
  id?: string;
  title: string;
  items?: Item[];
};

const SideNavHeader = ({ title }: { title: string }) => (
  <div className={cn(prefix + 'side-nav-header', prefix + 'subheading')}>
    {title}
  </div>
);

const SideNavSubItems = ({
  items,
  iteration = 0,
}: {
  items: (ComponentProps<'a'> & Item)[];
  iteration?: number;
}) => (
  <div className={cn(prefix + 'scroll-link', prefix + 'side-nav-subitems')}>
    {items.map(({ title, items, ...props }) => (
      <Fragment key={props.id ?? title}>
        <a
          key={title}
          className={cn(
            prefix + 'scroll-link',
            prefix + 'side-nav-item',
            prefix + 'side-nav-child',
            iteration > 0 && prefix + 'side-nav-indent-' + iteration,
          )}
          {...props}
        >
          <span className={prefix + 'side-nav-item-name'}>{title}</span>
        </a>
        {items && iteration < 3 && (
          <SideNavSubItems items={items} iteration={iteration + 1} />
        )}
      </Fragment>
    ))}
  </div>
);

const SideNavItemRoot = ({
  item,
  ...props
}: ComponentProps<'a'> & { item: Item }) => {
  return (
    <a
      className={cn(
        prefix + 'scroll-link',
        prefix + 'side-nav-item',
        item.items && prefix + 'side-nav-item-has-subitems',
      )}
      {...props}
    >
      <span className={prefix + 'side-nav-item-name'}>{item.title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={cn(prefix + 'side-nav-mobile-chevron')}
      >
        <path
          fillRule="evenodd"
          d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
};

const SideNavItem = ({ item }: { item: Item }) =>
  item.items ? (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <SideNavItemRoot item={item} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SideNavSubItems items={item.items} />
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <SideNavItemRoot item={item} />
  );

const SideNavSection = ({ item }: { item: Item }) => (
  <div className={prefix + 'side-nav-section'}>
    <SideNavHeader title={item.title} />
    {item.items &&
      item.items.map((section) => (
        <SideNavItem key={section.id ?? section.title} item={section} />
      ))}
  </div>
);

const SideNav = ({ items }: { items: Item[] }) => (
  <div className={prefix + 'side-nav'}>
    {items.map((item) => (
      <SideNavSection key={item.id ?? item.title} item={item} />
    ))}
  </div>
);

export { SideNavHeader, SideNavSubItems, SideNavItem, SideNavSection, SideNav };
