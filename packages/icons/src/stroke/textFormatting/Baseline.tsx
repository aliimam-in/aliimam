import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Baseline: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Baseline(
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
        d="M4 20H20M6 16 12 4 18 16M8 12H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Baseline.displayName = "Baseline";

Baseline.metadata = {
  name: "Baseline",
  category: "stroke/textFormatting",
  tags: ["baseline", "icon"],
  description: "Baseline icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Baseline;
