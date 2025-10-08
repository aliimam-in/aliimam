import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Music4: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Music4(
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
        <path
          d="M9 18V5L21 3V16M9 9 21 7M6 21C7.657 21 9 19.657 9 18 9 16.343 7.657 15 6 15 4.343 15 3 16.343 3 18 3 19.657 4.343 21 6 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Music4.displayName = "Music4";

Music4.metadata = {
  name: "Music4",
  category: "stroke/files",
  tags: ["music", "icon"],
  description: "Music4 icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Music4;
