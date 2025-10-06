import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RefreshCwOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RefreshCwOff(
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
        d="M21 8 18.74 5.74C16.931 3.991 14.516 3.009 12 3 11 3 10.03 3.16 9.13 3.47M8 16H3V21M3 12C3 9.51 4 7.26 5.64 5.64"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16 5.26 18.26C7.069 20.009 9.484 20.991 12 21 14.49 21 16.74 20 18.36 18.36M21 12C21 13 20.84 13.97 20.53 14.87M21 3V8H16M22 22 2 2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RefreshCwOff.displayName = "RefreshCwOff";

RefreshCwOff.metadata = {
  name: "RefreshCwOff",
  category: "stroke/arrows",
  tags: ["refresh", "cw", "off", "icon"],
  description: "RefreshCwOff icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RefreshCwOff;
