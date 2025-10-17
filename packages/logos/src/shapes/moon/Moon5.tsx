import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon5: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon5(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_396)">
          <path d="M6 11.714C6 8.873 6.948 6.147 8.636 4.138 10.324 2.129 12.613 1 15 1 17.387 1 19.676 2.129 21.364 4.138 23.052 6.147 24 8.873 24 11.714L6 11.714ZM0 12.286C0 15.127.948 17.853 2.636 19.862 4.324 21.871 6.613 23 9 23 11.387 23 13.676 21.871 15.364 19.862 17.052 17.853 18 15.127 18 12.286L0 12.286Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_396">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon5.displayName = "Moon5";

Moon5.metadata = {
  name: "Moon5",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon5 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon5;
