import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tornado: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Tornado(
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
        d="M21 4H3M18 8H6M19 12H9M16 16H10M11 20H9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Tornado.displayName = "Tornado";

Tornado.metadata = {
  name: "Tornado",
  category: "stroke/weather",
  tags: ["tornado", "icon"],
  description: "Tornado icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tornado;
