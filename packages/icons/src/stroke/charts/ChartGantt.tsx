import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartGantt: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartGantt(
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
        d="M10 6H18M12 16H18M3 3V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H21M8 11H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartGantt.displayName = "ChartGantt";

ChartGantt.metadata = {
  name: "ChartGantt",
  category: "stroke/charts",
  tags: ["chart", "gantt", "icon"],
  description: "ChartGantt icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartGantt;
