import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon4: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon4(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_395)">
          <path d="M3.24 24C1.16 20.724 0 16.448 0 12 0 7.552 1.16 3.276 3.24 0V24ZM24 24C20.817 24 17.765 22.736 15.515 20.485 13.264 18.235 12 15.183 12 12 12 8.817 13.264 5.765 15.515 3.515 17.765 1.264 20.817 0 24 0L24 24ZM7.235 21.058C8.461 22.368 9.926 23.364 11.52 24V0C9.926.636 8.461 1.632 7.235 2.942 4.984 5.344 3.72 8.603 3.72 12 3.72 15.398 4.984 18.656 7.235 21.058Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_395">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon4.displayName = "Moon4";

Moon4.metadata = {
  name: "Moon4",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon4 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon4;
