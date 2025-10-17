import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon15: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon15(
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
          d="M6.76305 12C2.75964 9.83904 0 5.2776 0 0H6C6 3.6819 8.68629 6.66667 12 6.66667C15.3137 6.66667 18 3.6819 18 0H24C24 5.2776 21.2404 9.83904 17.2369 12C21.2404 14.161 24 18.7224 24 24H18C18 20.3181 15.3137 17.3333 12 17.3333C8.68629 17.3333 6 20.3181 6 24H0C0 18.7224 2.75964 14.161 6.76305 12Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Moon15.displayName = "Moon15";

Moon15.metadata = {
  name: "Moon15",
  category: "shapes/moon",
  tags: ["moon", "15", "icon"],
  description: "Moon15 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon15;
