import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const TooltipRoot: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipPortal: React.FC<TooltipPrimitive.TooltipPortalProps>;
declare const TooltipArrow: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipArrowProps & React.RefAttributes<SVGSVGElement>>;
declare const TooltipContent: {
    ({ sideOffset, className, ref, ...props }: React.ComponentPropsWithRef<typeof TooltipPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type CustomProps = {
    text: string;
    arrow?: boolean;
};
declare const Tooltip: ({ text, arrow, children, defaultOpen, open, onOpenChange, delayDuration, disableHoverableContent, className, ...props }: TooltipPrimitive.TooltipProps & TooltipPrimitive.TooltipContentProps & CustomProps) => import("react/jsx-runtime").JSX.Element;
export { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, Tooltip, };
//# sourceMappingURL=Tooltip.d.ts.map