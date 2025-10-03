import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartCandlestick: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartCandlestick(
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
        d="M9 5V9M10 9H8C7.448 9 7 9.448 7 10V14C7 14.552 7.448 15 8 15H10C10.552 15 11 14.552 11 14V10C11 9.448 10.552 9 10 9ZM9 15V17M17 3V5M18 5H16C15.448 5 15 5.448 15 6V12C15 12.552 15.448 13 16 13H18C18.552 13 19 12.552 19 12V6C19 5.448 18.552 5 18 5ZM17 13V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartCandlestick.displayName = "ChartCandlestick";

ChartCandlestick.metadata = {
  name: "ChartCandlestick",
  category: "stroke/charts",
  tags: ["chart", "candlestick", "icon"],
  description: "ChartCandlestick icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartCandlestick;
