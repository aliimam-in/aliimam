import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tidal: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Tidal(
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
        <g clipPath="url(#undefined-clip0_2066_1182)">
          <path
            d="M2.01396 6.003L0.0119629 8.006L2.00197 9.997C3.09528 11.0909 4.00157 11.988 4.01596 11.988C4.02795 11.988 4.93424 11.0909 6.02994 9.997L8.01995 8.006L10.01 9.997L12 11.988L9.99798 13.991L7.99598 15.994L9.99798 17.997L12 20L14.002 17.997L16.004 15.994L14.0068 13.9958L12.012 12L14.0092 10.0018L16.004 8.006L18.0012 10.0018L19.996 12L21.998 9.997L24 7.994L21.998 5.991L19.996 3.98801L17.994 5.991L15.992 7.994L13.9948 5.9958L12 4L10.0028 5.9958L8.00797 7.994L6.01076 5.9958L4.01596 4L2.01396 6.003Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1182">
            <path fill="#fff" transform="translate(0 4)" d="M0 0H24V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Tidal.displayName = "Tidal";

Tidal.metadata = {
  name: "Tidal",
  category: "icon/music",
  tags: ["tidal", "icon"],
  description: "Tidal icon from icon/music category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tidal;
