import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TrendingUpDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TrendingUpDown(
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
        d="M14.828 14.828 21 21M21 16V21H16M21 3 12 12 8 8 2 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8V3H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TrendingUpDown.displayName = "TrendingUpDown";

TrendingUpDown.metadata = {
  name: "TrendingUpDown",
  category: "stroke/charts",
  tags: ["trending", "up", "down", "icon"],
  description: "TrendingUpDown icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrendingUpDown;
