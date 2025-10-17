import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc6: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc6(
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
        <g clipPath="url(#undefined-clip0_2068_653)">
          <path
            d="M24 12C17.3726 12 12 17.3726 12 24H0L1.04908e-06 12C6.62743 12 12 6.62742 12 0L24 1.57361e-06L24 12Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_653">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Misc6.displayName = "Misc6";

Misc6.metadata = {
  name: "Misc6",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc6 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc6;
