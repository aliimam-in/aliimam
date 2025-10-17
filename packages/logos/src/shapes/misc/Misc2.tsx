import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc2: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc2(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_658)">
          <path d="M18.96 0C21.744 0 24 2.256 24 5.04L24 15.84 16.32 15.84 16.32 7.68 8.16 7.68 8.16 0 18.96 0ZM5.04 24C2.256 24 0 21.744 0 18.96L0 8.16 7.68 8.16 7.68 16.32 15.84 16.32 15.84 24 5.04 24ZM3.84 7.68C1.719 7.68 0 5.961 0 3.84 0 1.719 1.719 0 3.84 0 5.961 0 7.68 1.719 7.68 3.84 7.68 5.961 5.961 7.68 3.84 7.68Z" />
          <path d="M15.84 12C15.84 9.879 14.121 8.16 12 8.16 9.879 8.16 8.16 9.879 8.16 12 8.16 14.121 9.879 15.84 12 15.84 14.121 15.84 15.84 14.121 15.84 12ZM24 20.16C24 18.039 22.281 16.32 20.16 16.32 18.039 16.32 16.32 18.039 16.32 20.16 16.32 22.281 18.039 24 20.16 24 22.281 24 24 22.281 24 20.16Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_658">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Misc2.displayName = "Misc2";

Misc2.metadata = {
  name: "Misc2",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc2 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc2;
