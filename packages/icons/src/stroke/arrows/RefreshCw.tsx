import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RefreshCw: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RefreshCw(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.516 3.00947 16.931 3.99122 18.74 5.74L21 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3V8H16M21 12C21 14.387 20.052 16.676 18.364 18.364 16.676 20.052 14.387 21 12 21 9.484 20.991 7.069 20.009 5.26 18.26L3 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16H3V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RefreshCw.displayName = "RefreshCw";

RefreshCw.metadata = {
  name: "RefreshCw",
  category: "stroke/arrows",
  tags: ["refresh", "cw", "icon"],
  description: "RefreshCw icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RefreshCw;
