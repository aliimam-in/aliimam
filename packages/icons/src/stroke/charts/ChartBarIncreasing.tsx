import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartBarIncreasing: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartBarIncreasing(
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
        d="M3 3V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H21M7 11H15M7 16H19M7 6H10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartBarIncreasing.displayName = "ChartBarIncreasing";

ChartBarIncreasing.metadata = {
  name: "ChartBarIncreasing",
  category: "stroke/charts",
  tags: ["chart", "bar", "increasing", "icon"],
  description: "ChartBarIncreasing icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartBarIncreasing;
