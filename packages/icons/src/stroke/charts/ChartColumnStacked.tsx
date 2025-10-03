import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartColumnStacked: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartColumnStacked(
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
        d="M11 13H7M19 9H15M3 3V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5H16C15.448 5 15 5.448 15 6V16C15 16.552 15.448 17 16 17H18C18.552 17 19 16.552 19 16V6C19 5.448 18.552 5 18 5ZM10 8H8C7.448 8 7 8.448 7 9V16C7 16.552 7.448 17 8 17H10C10.552 17 11 16.552 11 16V9C11 8.448 10.552 8 10 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartColumnStacked.displayName = "ChartColumnStacked";

ChartColumnStacked.metadata = {
  name: "ChartColumnStacked",
  category: "stroke/charts",
  tags: ["chart", "column", "stacked", "icon"],
  description: "ChartColumnStacked icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartColumnStacked;
