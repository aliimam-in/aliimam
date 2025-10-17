import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon8: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon8(
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
        <g clipPath="url(#undefined-clip0_2068_391)">
          <path
            d="M20.4849 20.4853C18.2345 22.7357 15.1823 24 11.9997 24V12.027C11.9852 15.3283 9.30453 18 5.99989 18C2.68624 18 1.44844e-07 15.3137 0 12C-1.44844e-07 8.6863 2.68624 6 5.99989 6C9.30453 6 11.9852 8.67171 11.9997 11.973L11.9997 0C15.1823 6.19675e-07 18.2345 1.26428 20.4849 3.51472C22.7353 5.76516 23.9995 8.81741 23.9995 12C23.9995 15.1826 22.7353 18.2349 20.4849 20.4853Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_391">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon8.displayName = "Moon8";

Moon8.metadata = {
  name: "Moon8",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon8 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon8;
