import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartBarBig: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartBarBig(
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
        d="M15 13H8C7.448 13 7 13.448 7 14V16C7 16.552 7.448 17 8 17H15C15.552 17 16 16.552 16 16V14C16 13.448 15.552 13 15 13ZM18 5H8C7.448 5 7 5.448 7 6V8C7 8.552 7.448 9 8 9H18C18.552 9 19 8.552 19 8V6C19 5.448 18.552 5 18 5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartBarBig.displayName = "ChartBarBig";

ChartBarBig.metadata = {
  name: "ChartBarBig",
  category: "stroke/charts",
  tags: ["chart", "bar", "big", "icon"],
  description: "ChartBarBig icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartBarBig;
