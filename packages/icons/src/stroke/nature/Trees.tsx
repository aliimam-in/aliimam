import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Trees: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Trees(
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
          d="M10 10V10.2C10.656 10.452 11.202 10.927 11.544 11.541 11.886 12.154 12.002 12.869 11.871 13.559 11.74 14.249 11.371 14.872 10.828 15.318 10.285 15.764 9.603 16.005 8.9 16H5C4.306 15.983 3.639 15.725 3.114 15.271 2.588 14.817 2.236 14.195 2.118 13.511 2 12.826 2.123 12.122 2.467 11.519 2.81 10.915 3.352 10.449 4 10.2V10C4 9.204 4.316 8.441 4.879 7.879 5.441 7.316 6.204 7 7 7 7.796 7 8.559 7.316 9.121 7.879 9.684 8.441 10 9.204 10 10ZM7 16V22M13 19V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0001 19H20.3001C20.4958 18.9973 20.6864 18.9371 20.8483 18.8271C21.0102 18.717 21.1362 18.5618 21.2107 18.3808C21.2853 18.1998 21.305 18.001 21.2676 17.8088C21.2301 17.6167 21.1371 17.4398 21.0001 17.3L18.0001 14H18.3001C18.4958 13.9973 18.6864 13.9371 18.8483 13.8271C19.0102 13.717 19.1362 13.5619 19.2107 13.3808C19.2853 13.1998 19.305 13.001 19.2676 12.8088C19.2301 12.6167 19.1371 12.4398 19.0001 12.3L16.0001 9H16.2001C16.4043 9.01843 16.6093 8.97361 16.7873 8.87162C16.9652 8.76963 17.1074 8.6154 17.1948 8.42984C17.2821 8.24428 17.3102 8.03636 17.2754 7.83425C17.2406 7.63215 17.1445 7.44564 17.0001 7.3L13.0001 3L11.6001 4.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Trees.displayName = "Trees";

Trees.metadata = {
  name: "Trees",
  category: "stroke/nature",
  tags: ["trees", "icon"],
  description: "Trees icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Trees;
