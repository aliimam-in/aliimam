import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star9: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star9(
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
        <g clipPath="url(#undefined-clip0_2068_125)">
          <path
            d="M23.9623 0.0378516C17.3728 6.66832 17.3852 17.3852 24 24C17.3852 17.3852 6.6682 17.3726 0.0377344 23.9621C6.62719 17.3318 6.61477 6.61477 0 0C6.61477 6.61477 17.3318 6.62754 23.9623 0.0378516Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_125">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star9.displayName = "Star9";

Star9.metadata = {
  name: "Star9",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star9 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star9;
