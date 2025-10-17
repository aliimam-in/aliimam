import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star3: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star3(
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
        <g clipPath="url(#undefined-clip0_2068_124)">
          <path
            d="M7.02942 4.2669e-07L12 3.77815L16.9705 0L17.8137 6.18627L24 7.02944L20.2218 12L24 16.9706L17.8137 17.8137L16.9705 24L12 20.2218L7.02942 24L6.18626 17.8137L-1.48321e-05 16.9706L3.77813 12L-1.52588e-05 7.02944L6.18626 6.18627L7.02942 4.2669e-07Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_124">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star3.displayName = "Star3";

Star3.metadata = {
  name: "Star3",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star3 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star3;
