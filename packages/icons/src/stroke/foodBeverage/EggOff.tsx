import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EggOff: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function EggOff(
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
          d="M2 2 22 22M20 14.347V14C20 8 16 2 12 2 10.922 2 9.843 2.436 8.843 3.19M6.206 6.21C4.871 8.4 4 11.2 4 14 4 15.704 4.544 17.363 5.552 18.736 6.56 20.109 7.981 21.124 9.606 21.634 11.232 22.144 12.978 22.121 14.59 21.57 16.202 21.018 17.595 19.967 18.568 18.568"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

EggOff.displayName = "EggOff";

EggOff.metadata = {
  name: "EggOff",
  category: "stroke/foodBeverage",
  tags: ["egg", "off", "icon"],
  description: "EggOff icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EggOff;
