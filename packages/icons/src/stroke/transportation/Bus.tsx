import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bus: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Bus(
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
          d="M8 6V12M15 6V12M2 12H21.6M18 18H21C21 18 21.5 16.3 21.8 15.2 21.9 14.8 22 14.4 22 14 22 13.6 21.9 13.2 21.8 12.8L20.4 7.8C20.1 6.8 19.1 6 18 6H4C3.47 6 2.961 6.211 2.586 6.586 2.211 6.961 2 7.47 2 8V18H5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 20C8.105 20 9 19.105 9 18 9 16.895 8.105 16 7 16 5.895 16 5 16.895 5 18 5 19.105 5.895 20 7 20ZM9 18H14M16 20C17.105 20 18 19.105 18 18 18 16.895 17.105 16 16 16 14.895 16 14 16.895 14 18 14 19.105 14.895 20 16 20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bus.displayName = "Bus";

Bus.metadata = {
  name: "Bus",
  category: "stroke/transportation",
  tags: ["bus", "icon"],
  description: "Bus icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bus;
