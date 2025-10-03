import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartSpline: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartSpline(
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
        d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16C7.5 14 8.5 9 11 9C13 9 13 12 15 12C17.5 12 19.5 7 20 5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartSpline.displayName = "ChartSpline";

ChartSpline.metadata = {
  name: "ChartSpline",
  category: "stroke/charts",
  tags: ["chart", "spline", "icon"],
  description: "ChartSpline icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartSpline;
