import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc5: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc5(
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
        <g clipPath="url(#undefined-clip0_2068_654)">
          <path
            d="M17.4 0C21.0451 0 24 3.24324 24 7.78378C24 16.8649 15 22.0541 12 24C9 22.0541 0 16.8649 0 7.78378C0 3.24324 3 0 6.6 0C8.83196 0 10.8 1.2973 12 2.59459C13.2 1.2973 15.168 0 17.4 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_654">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Misc5.displayName = "Misc5";

Misc5.metadata = {
  name: "Misc5",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc5 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc5;
