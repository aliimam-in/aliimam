import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star8: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star8(
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
        <g clipPath="url(#undefined-clip0_2068_121)">
          <path
            d="M12 0C13.4908 7.48588 16.4707 10.4947 24 12C16.469 13.5053 13.4891 16.5141 12 24C10.5092 16.5141 7.52927 13.5035 0 12C7.53102 10.4947 10.5109 7.48588 12 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_121">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star8.displayName = "Star8";

Star8.metadata = {
  name: "Star8",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star8 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star8;
