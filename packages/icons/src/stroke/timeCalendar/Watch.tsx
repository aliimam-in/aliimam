import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Watch: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Watch(
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
          d="M12 10V12.2L13.6 13.2M16.13 7.66 15.32 3.61C15.228 3.15 14.978 2.736 14.612 2.442 14.247 2.147 13.789 1.991 13.32 2H10.64C10.171 1.991 9.713 2.147 9.347 2.442 8.982 2.736 8.731 3.15 8.64 3.61L7.86 7.66M7.88 16.36 8.68 20.36C8.771 20.82 9.022 21.234 9.387 21.528 9.753 21.823 10.211 21.979 10.68 21.97H13.4C13.869 21.979 14.327 21.823 14.692 21.528 15.058 21.234 15.308 20.82 15.4 20.36L16.21 16.31"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Watch.displayName = "Watch";

Watch.metadata = {
  name: "Watch",
  category: "stroke/timeCalendar",
  tags: ["watch", "icon"],
  description: "Watch icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Watch;
