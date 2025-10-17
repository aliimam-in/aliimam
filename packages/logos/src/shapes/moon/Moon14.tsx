import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon14: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon14(
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
        <g clipPath="url(#undefined-clip0_2068_388)">
          <path
            d="M4.11775 0C1.4812 2.63655 1.92636e-08 6.21248 0 9.94113C-1.92636e-08 13.6698 1.4812 17.2457 4.11775 19.8823C6.7543 22.5188 10.3302 24 14.0589 24C17.7875 24 21.3634 22.5188 24 19.8823L4.11775 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_388">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon14.displayName = "Moon14";

Moon14.metadata = {
  name: "Moon14",
  category: "shapes/moon",
  tags: ["moon", "14", "icon"],
  description: "Moon14 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon14;
