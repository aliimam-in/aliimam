import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartColumn: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartColumn(
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
        d="M3 3V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H21M18 17V9M13 17V5M8 17V14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartColumn.displayName = "ChartColumn";

ChartColumn.metadata = {
  name: "ChartColumn",
  category: "stroke/charts",
  tags: ["chart", "column", "icon"],
  description: "ChartColumn icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartColumn;
