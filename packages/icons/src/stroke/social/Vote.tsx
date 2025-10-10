import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Vote: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Vote(
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
          d="M9 12L11 14L15 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 7C5 5.9 5.9 5 7 5H17C17.53 5 18.039 5.211 18.414 5.586 18.789 5.961 19 6.47 19 7V19H5V7ZM22 19H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Vote.displayName = "Vote";

Vote.metadata = {
  name: "Vote",
  category: "stroke/social",
  tags: ["vote", "icon"],
  description: "Vote icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Vote;
