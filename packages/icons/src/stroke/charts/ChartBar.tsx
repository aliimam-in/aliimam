import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartBar: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartBar(
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
        d="M3 3V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H21M7 16H15M7 11H19M7 6H10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartBar.displayName = "ChartBar";

ChartBar.metadata = {
  name: "ChartBar",
  category: "stroke/charts",
  tags: ["chart", "bar", "icon"],
  description: "ChartBar icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartBar;
