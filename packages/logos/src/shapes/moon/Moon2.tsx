import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon2: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon2(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_399)">
          <path d="M22.326 21.647C22.899 21.074 23.341 20.381 23.626 19.608 23.912 18.835 24.036 17.997 23.991 17.142 23.946 16.287 23.733 15.431 23.364 14.623 22.995 13.816 22.478 13.073 21.841 12.436 21.204 11.8 20.461 11.282 19.654 10.913 18.846 10.544 17.991 10.331 17.135 10.286 16.28 10.241 15.442 10.365 14.669 10.651 13.896 10.937 13.203 11.378 12.63 11.951L22.326 21.647ZM1.674 2.353C1.101 2.926.659 3.618.374 4.391.088 5.164-.036 6.002.009 6.858.054 7.713.267 8.569.636 9.376 1.005 10.184 1.522 10.927 2.159 11.563 2.796 12.2 3.539 12.718 4.346 13.086 5.154 13.455 6.009 13.668 6.865 13.713 7.72 13.758 8.558 13.634 9.331 13.349 10.104 13.063 10.797 12.621 11.37 12.048L1.674 2.353ZM2.353 22.325C2.926 22.898 3.619 23.34 4.392 23.626 5.165 23.912 6.003 24.036 6.858 23.991 7.713 23.946 8.569 23.733 9.376 23.364 10.184 22.995 10.927 22.477 11.564 21.841 12.2 21.204 12.718 20.461 13.087 19.653 13.456 18.846 13.669 17.99 13.714 17.135 13.759 16.28 13.635 15.442 13.349 14.669 13.063 13.896 12.621 13.203 12.048 12.63L2.353 22.325ZM21.647 1.674C21.074 1.101 20.381.659 19.608.374 18.835.088 17.997-.036 17.142.009 16.287.054 15.431.267 14.623.636 13.816 1.005 13.073 1.522 12.436 2.159 11.8 2.796 11.282 3.539 10.913 4.346 10.544 5.154 10.331 6.009 10.286 6.865 10.241 7.72 10.365 8.558 10.651 9.331 10.936 10.104 11.378 10.797 11.951 11.37L21.647 1.674Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_399">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon2.displayName = "Moon2";

Moon2.metadata = {
  name: "Moon2",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon2 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon2;
