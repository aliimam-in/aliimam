import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const DnaOff: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function DnaOff(
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
          d="M15 2C13.65 3.5 12.908 5 12.5 6.5L14 8M17 6 14.109 3.109M2 15C5.333 12 8.667 12 12 12M2 2 22 22M20 9 20.891 9.891M22 9C20.5 10.35 19 11.092 17.5 11.5L16.5 10.5M3.109 14.109 4 15M6.5 12.5 7.5 13.5M7 18 9.891 20.891M9 22C10.35 20.5 11.092 19 11.5 17.5L10 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

DnaOff.displayName = "DnaOff";

DnaOff.metadata = {
  name: "DnaOff",
  category: "stroke/foodBeverage",
  tags: ["dna", "off", "icon"],
  description: "DnaOff icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DnaOff;
