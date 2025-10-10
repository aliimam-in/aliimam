import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SunSnow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SunSnow(
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
        d="M10 21V20M10 4V3M10 9C9.204 9 8.441 9.316 7.879 9.879 7.316 10.441 7 11.204 7 12 7 12.796 7.316 13.559 7.879 14.121 8.441 14.684 9.204 15 10 15M14 20 15.25 17.5 18 18M14 4 15.25 6.5 18 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21 14 15 15.5 12H22M17 3 14 9 15.5 12M2 12H3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10 18.5 12 20 14M3.64 18.36 4.34 17.66M4.34 6.34 3.64 5.64"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SunSnow.displayName = "SunSnow";

SunSnow.metadata = {
  name: "SunSnow",
  category: "stroke/weather",
  tags: ["sun", "snow", "icon"],
  description: "SunSnow icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SunSnow;
