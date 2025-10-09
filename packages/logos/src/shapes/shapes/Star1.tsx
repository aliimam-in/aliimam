import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star1: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star1(
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
        viewBox="0 0 64 64"
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
          d="M32 1.6001L40.7021 23.2455L64 24.8235L46.08 39.7793L51.777 62.4001L32 49.9975L12.223 62.4001L17.92 39.7793L0 24.8235L23.2979 23.2459L32 1.6001Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Star1.displayName = "Star1";

Star1.metadata = {
  name: "Star1",
  category: "shapes/shapes",
  tags: ["star", "icon"],
  description: "Star1 icon from shapes/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star1;
