import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn, prefix } from '@react-monorepo/ui';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(prefix + 'pagination', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(prefix + 'pagination-content', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={className} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
  size: 'default' | 'sm' | 'large' | 'icon';
} & React.ComponentProps<'a'>;

const PaginationLink = ({
  isActive,
  size = 'icon',
  className,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    data-variant={isActive ? 'outline' : 'ghost'}
    data-size={size}
    className={cn(prefix + 'pagination-link', className)}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

// size is 'default' from both next and previous
const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn(prefix + 'pagination-previous', className)}
    {...props}
  >
    <ChevronLeft
      style={{
        height: '1rem',
        width: '1rem',
      }}
    />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(prefix + 'pagination-next', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight
      style={{
        height: '1rem',
        width: '1rem',
      }}
    />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn(prefix + 'pagination-ellipsis', className)}
    {...props}
  >
    <MoreHorizontal
      style={{
        height: '1rem',
        width: '1rem',
      }}
    />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
