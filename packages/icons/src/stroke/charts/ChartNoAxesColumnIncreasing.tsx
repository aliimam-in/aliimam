import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartNoAxesColumnIncreasing: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartNoAxesColumnIncreasing(
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
        d="M5 21V15M12 21V9M19 21V3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartNoAxesColumnIncreasing.displayName = "ChartNoAxesColumnIncreasing";

ChartNoAxesColumnIncreasing.metadata = {
  name: "ChartNoAxesColumnIncreasing",
  category: "stroke/charts",
  tags: ["chart", "no", "axes", "column", "increasing", "icon"],
  description: "ChartNoAxesColumnIncreasing icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartNoAxesColumnIncreasing;
