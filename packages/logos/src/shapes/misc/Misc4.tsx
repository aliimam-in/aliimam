import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc4: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc4(
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
        <g clipPath="url(#undefined-clip0_2068_657)">
          <path
            d="M15.1765 14.88L21.8792 14.88C23.5183 14.88 24.5359 13.6657 23.703 12.7038L13.4217 0.8308C12.1435 -0.645258 8.82353 -0.0275737 8.82353 1.68629L8.82353 9.12L2.12076 9.12C0.481741 9.12 -0.535891 10.3343 0.297039 11.2962L10.5783 23.1692C11.8565 24.6453 15.1765 24.0276 15.1765 22.3137L15.1765 14.88Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_657">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Misc4.displayName = "Misc4";

Misc4.metadata = {
  name: "Misc4",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc4 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc4;
