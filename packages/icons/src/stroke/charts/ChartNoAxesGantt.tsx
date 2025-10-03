import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartNoAxesGantt: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartNoAxesGantt(
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
        d="M6 5H18M4 12H14M12 19H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartNoAxesGantt.displayName = "ChartNoAxesGantt";

ChartNoAxesGantt.metadata = {
  name: "ChartNoAxesGantt",
  category: "stroke/charts",
  tags: ["chart", "no", "axes", "gantt", "icon"],
  description: "ChartNoAxesGantt icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartNoAxesGantt;
