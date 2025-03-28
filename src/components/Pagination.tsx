import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn, prefix } from "@react-monorepo/ui";

const Pagination = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(prefix + "pagination", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"ul">) => (
  <ul className={cn(prefix + "pagination-content", className)} {...props} />
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"li">) => (
  <li className={className} {...props} />
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  size: "default" | "sm" | "large" | "icon";
} & React.ComponentPropsWithRef<"a">;

const PaginationLink = ({
  isActive,
  size = "icon",
  className,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    data-variant={isActive ? "outline" : "ghost"}
    data-size={size}
    className={cn(prefix + "pagination-link", className)}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

// size is 'default' from both next and previous
const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn(prefix + "pagination-previous", className)}
    {...props}
  >
    <ChevronLeft
      style={{
        height: "1rem",
        width: "1rem",
      }}
    />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(prefix + "pagination-next", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight
      style={{
        height: "1rem",
        width: "1rem",
      }}
    />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"span">) => (
  <span
    aria-hidden
    className={cn(prefix + "pagination-ellipsis", className)}
    {...props}
  >
    <MoreHorizontal
      style={{
        height: "1rem",
        width: "1rem",
      }}
    />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
