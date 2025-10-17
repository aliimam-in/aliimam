import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc7: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc7(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_651)">
          <path d="M0 0H4.8V4.8H0V0ZM4.8 4.8H9.6V9.6H4.8V4.8ZM0 9.6H4.8V14.4H0V9.6ZM4.8 14.4H9.6V19.2H4.8V14.4ZM14.4 4.8H19.2V9.6H14.4V4.8ZM9.6 9.6H14.4V14.4H9.6V9.6ZM0 19.2H4.8V24H0V19.2ZM19.2 9.6H24V14.4H19.2V9.6ZM9.6 0H14.4V4.8H9.6V0ZM14.4 14.4H19.2V19.2H14.4V14.4ZM9.6 19.2H14.4V24H9.6V19.2ZM19.2 0H24V4.8H19.2V0ZM19.2 19.2H24V24H19.2V19.2Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_651">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Misc7.displayName = "Misc7";

Misc7.metadata = {
  name: "Misc7",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc7 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc7;
