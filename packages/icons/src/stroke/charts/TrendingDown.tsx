import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TrendingDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TrendingDown(
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
        d="M16 17H22V11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 17L13.5 8.5L8.5 13.5L2 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TrendingDown.displayName = "TrendingDown";

TrendingDown.metadata = {
  name: "TrendingDown",
  category: "stroke/charts",
  tags: ["trending", "down", "icon"],
  description: "TrendingDown icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrendingDown;
