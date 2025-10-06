import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Expand: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Expand(
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
          d="M15 15 21 21M15 9 21 3M21 16V21H16M21 8V3H16M3 16V21H8M3 21 9 15M3 8V3H8M9 9 3 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Expand.displayName = "Expand";

Expand.metadata = {
  name: "Expand",
  category: "stroke/arrows",
  tags: ["expand", "icon"],
  description: "Expand icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Expand;
