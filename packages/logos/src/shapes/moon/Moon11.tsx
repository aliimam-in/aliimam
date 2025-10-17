import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon11: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon11(
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
        <g clipPath="url(#undefined-clip0_2068_398)">
          <path
            d="M24 0C24 13.2548 13.2548 24 0 24C0 10.7452 10.7452 0 24 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_398">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon11.displayName = "Moon11";

Moon11.metadata = {
  name: "Moon11",
  category: "shapes/moon",
  tags: ["moon", "11", "icon"],
  description: "Moon11 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon11;
