import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star5: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star5(
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
        <g clipPath="url(#undefined-clip0_2068_126)">
          <path
            d="M13.8156 7.26251L12 0L10.1844 7.26246L5.55128 5.55114L7.26264 10.1843L0 12L7.26256 13.8156L5.55122 18.4488L10.1844 16.7374L12 24L13.8157 16.7374L18.4489 18.4488L16.7376 13.8156L24 12L16.7375 10.1844L18.4489 5.55113L13.8156 7.26251Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_126">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star5.displayName = "Star5";

Star5.metadata = {
  name: "Star5",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star5 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star5;
