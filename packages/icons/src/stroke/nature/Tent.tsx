import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tent: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Tent(
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
          d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15 8.5 21M2 21H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Tent.displayName = "Tent";

Tent.metadata = {
  name: "Tent",
  category: "stroke/nature",
  tags: ["tent", "icon"],
  description: "Tent icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tent;
