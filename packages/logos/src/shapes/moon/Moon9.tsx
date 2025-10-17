import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon9: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon9(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_394)">
          <path d="M12 24C15.182 24 18.234 22.736 20.485 20.485 22.735 18.235 24 15.183 24 12 24 8.817 22.735 5.765 20.485 3.515 18.234 1.264 15.182 0 12 0L12 12 12 24ZM0 24C3.182 24 6.234 22.736 8.485 20.485 10.735 18.235 12 15.183 12 12 12 8.817 10.735 5.765 8.485 3.515 6.234 1.264 3.182 0 0 0L0 24Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_394">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon9.displayName = "Moon9";

Moon9.metadata = {
  name: "Moon9",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon9 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon9;
