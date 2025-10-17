import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star4: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star4(
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
        <g clipPath="url(#undefined-clip0_2068_123)">
          <path
            d="M1.86419 22.5938C6.74265 18.9135 9.18188 17.0734 12 17.0734C14.8182 17.0734 17.2574 18.9135 22.1359 22.5938L24 24L22.5937 22.1359C18.9135 17.2575 17.0733 14.8182 17.0733 12.0001C17.0733 9.18192 18.9135 6.74269 22.5937 1.86422L24 5.60626e-05L22.1359 1.40634C17.2574 5.08659 14.8182 6.92672 12 6.92672C9.18188 6.92672 6.74266 5.08659 1.8642 1.40634L-1.52588e-05 0L1.40632 1.86421C5.08656 6.74269 6.92668 9.18192 6.92668 12.0001C6.92668 14.8182 5.08656 17.2575 1.40632 22.1359L3.19758e-05 24.0001L1.86419 22.5938Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_123">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star4.displayName = "Star4";

Star4.metadata = {
  name: "Star4",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star4 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star4;
