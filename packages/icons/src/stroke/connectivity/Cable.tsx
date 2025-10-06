import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cable: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cable(
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
          d="M17 19C16.735 19 16.48 18.895 16.293 18.707 16.105 18.52 16 18.265 16 18V16C16 15.47 16.211 14.961 16.586 14.586 16.961 14.211 17.47 14 18 14H20C20.53 14 21.039 14.211 21.414 14.586 21.789 14.961 22 15.47 22 16V18C22 18.265 21.895 18.52 21.707 18.707 21.52 18.895 21.265 19 21 19H17ZM17 21V19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 14V6.5C19 5.572 18.631 4.682 17.975 4.025 17.319 3.369 16.428 3 15.5 3 14.572 3 13.682 3.369 13.025 4.025 12.369 4.682 12 5.572 12 6.5V17.5C12 18.428 11.631 19.319 10.975 19.975 10.319 20.631 9.428 21 8.5 21 7.572 21 6.682 20.631 6.025 19.975 5.369 19.319 5 18.428 5 17.5V10M21 21V19M3 5V3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 10C3.47 10 2.961 9.789 2.586 9.414 2.211 9.039 2 8.53 2 8V6C2 5.735 2.105 5.48 2.293 5.293 2.48 5.105 2.735 5 3 5H7C7.265 5 7.52 5.105 7.707 5.293 7.895 5.48 8 5.735 8 6V8C8 8.53 7.789 9.039 7.414 9.414 7.039 9.789 6.53 10 6 10H4ZM7 5V3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cable.displayName = "Cable";

Cable.metadata = {
  name: "Cable",
  category: "stroke/connectivity",
  tags: ["cable", "icon"],
  description: "Cable icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cable;
