import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bike: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Bike(
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
          d="M18.5 21C20.433 21 22 19.433 22 17.5 22 15.567 20.433 14 18.5 14 16.567 14 15 15.567 15 17.5 15 19.433 16.567 21 18.5 21ZM5.5 21C7.433 21 9 19.433 9 17.5 9 15.567 7.433 14 5.5 14 3.567 14 2 15.567 2 17.5 2 19.433 3.567 21 5.5 21ZM15 6C15.552 6 16 5.552 16 5 16 4.448 15.552 4 15 4 14.448 4 14 4.448 14 5 14 5.552 14.448 6 15 6ZM12 17.5V14L9 11 13 8 15 11H17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bike.displayName = "Bike";

Bike.metadata = {
  name: "Bike",
  category: "stroke/transportation",
  tags: ["bike", "icon"],
  description: "Bike icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bike;
