import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartNoAxesCombined: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartNoAxesCombined(
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
        d="M12 16V21M16 14V21M20 10V21M22 3 13.354 11.646C13.308 11.693 13.252 11.73 13.192 11.755 13.131 11.78 13.066 11.793 13 11.793 12.934 11.793 12.869 11.78 12.808 11.755 12.748 11.73 12.692 11.693 12.646 11.646L9.354 8.354C9.26 8.26 9.133 8.208 9.001 8.208 8.868 8.208 8.741 8.26 8.647 8.354L2 15M4 18V21M8 14V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartNoAxesCombined.displayName = "ChartNoAxesCombined";

ChartNoAxesCombined.metadata = {
  name: "ChartNoAxesCombined",
  category: "stroke/charts",
  tags: ["chart", "no", "axes", "combined", "icon"],
  description: "ChartNoAxesCombined icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartNoAxesCombined;
