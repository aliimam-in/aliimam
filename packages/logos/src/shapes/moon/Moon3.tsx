import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon3: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon3(
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
        <g clipPath="url(#undefined-clip0_2068_397)">
          <path
            d="M24 1.08V0L0 1.58912e-07L1.89954e-08 1.08C1.03406e-07 5.87926 2.81737 10.0205 6.88841 11.94C2.81737 13.8595 -8.49442e-08 18.0007 1.18235e-07 22.8L1.69038e-07 24L24 24V22.8C24 18.0007 21.1826 13.8595 17.1116 11.94C21.1826 10.0205 24 5.87926 24 1.08Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_397">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon3.displayName = "Moon3";

Moon3.metadata = {
  name: "Moon3",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon3 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon3;
