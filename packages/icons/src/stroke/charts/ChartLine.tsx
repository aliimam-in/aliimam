import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartLine(
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
        d="M19 9L14 14L10 10L7 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartLine.displayName = "ChartLine";

ChartLine.metadata = {
  name: "ChartLine",
  category: "stroke/charts",
  tags: ["chart", "line", "icon"],
  description: "ChartLine icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartLine;
