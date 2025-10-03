import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TrendingUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TrendingUp(
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
        d="M16 7H22V13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7L13.5 15.5L8.5 10.5L2 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TrendingUp.displayName = "TrendingUp";

TrendingUp.metadata = {
  name: "TrendingUp",
  category: "stroke/charts",
  tags: ["trending", "up", "icon"],
  description: "TrendingUp icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrendingUp;
