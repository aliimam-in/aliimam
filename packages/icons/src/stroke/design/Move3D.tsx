import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Move3D: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Move3D(
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
          d="M5 3V19H21M5 19 11 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 6 5 3 8 6M18 16 21 19 18 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Move3D.displayName = "Move3D";

Move3D.metadata = {
  name: "Move3D",
  category: "stroke/design",
  tags: ["move", "icon"],
  description: "Move3D icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Move3D;
