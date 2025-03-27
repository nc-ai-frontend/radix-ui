import * as React from "react";
declare const Pagination: {
    ({ className, ...props }: React.ComponentPropsWithRef<"nav">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationContent: {
    ({ className, ...props }: React.ComponentPropsWithRef<"ul">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationItem: {
    ({ className, ...props }: React.ComponentPropsWithRef<"li">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type PaginationLinkProps = {
    isActive?: boolean;
    size: "default" | "sm" | "large" | "icon";
} & React.ComponentPropsWithRef<"a">;
declare const PaginationLink: {
    ({ isActive, size, className, ...props }: PaginationLinkProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationLink>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationLink>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentPropsWithRef<"span">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
//# sourceMappingURL=Pagination.d.ts.map