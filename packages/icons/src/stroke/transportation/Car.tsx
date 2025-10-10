import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Car: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Car(
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
          d="M19 17H21C21.6 17 22 16.6 22 16V13C22 12.1 21.3 11.3 20.5 11.1C18.7 10.6 16 10 16 10C16 10 14.7 8.6 13.8 7.7C13.3 7.3 12.7 7 12 7H5C4.4 7 3.9 7.4 3.6 7.9L2.2 10.8C2.06758 11.1862 2 11.5917 2 12V16C2 16.6 2.4 17 3 17H5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 19C8.105 19 9 18.105 9 17 9 15.895 8.105 15 7 15 5.895 15 5 15.895 5 17 5 18.105 5.895 19 7 19ZM9 17H15M17 19C18.105 19 19 18.105 19 17 19 15.895 18.105 15 17 15 15.895 15 15 15.895 15 17 15 18.105 15.895 19 17 19Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Car.displayName = "Car";

Car.metadata = {
  name: "Car",
  category: "stroke/transportation",
  tags: ["car", "icon"],
  description: "Car icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Car;
