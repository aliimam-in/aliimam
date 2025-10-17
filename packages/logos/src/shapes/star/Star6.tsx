import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star6: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star6(
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
        <g clipPath="url(#undefined-clip0_2068_127)">
          <path
            d="M14.4 9.6L12 0L9.6 9.6L0 12L9.6 14.4L12 24L14.4 14.4L24 12L14.4 9.6Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_127">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star6.displayName = "Star6";

Star6.metadata = {
  name: "Star6",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star6 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star6;
