import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cherry: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cherry(
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
          d="M2 17C2 18.326 2.527 19.598 3.464 20.536 4.402 21.473 5.674 22 7 22 8.326 22 9.598 21.473 10.536 20.536 11.473 19.598 12 18.326 12 17 12 14.24 9.5 12 7 14 4.5 12 2 14.24 2 17ZM12 17C12 18.326 12.527 19.598 13.465 20.536 14.402 21.473 15.674 22 17 22 18.326 22 19.598 21.473 20.536 20.536 21.473 19.598 22 18.326 22 17 22 14.24 19.5 12 17 14 14.5 12 12 14.24 12 17Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14C10.22 11.09 11.29 5.25 12 2C13.66 4.38 16.94 11 17 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 9C17.71 9 14.86 6.67 12 2C17.71 2 22 6.67 22 9Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cherry.displayName = "Cherry";

Cherry.metadata = {
  name: "Cherry",
  category: "stroke/foodBeverage",
  tags: ["cherry", "icon"],
  description: "Cherry icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cherry;
