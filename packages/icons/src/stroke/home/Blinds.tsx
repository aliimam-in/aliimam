import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Blinds: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Blinds(
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
          d="M3 3H21M20 7H8M20 11H8M10 19H20M8 15H20M4 3V17M4 21C5.105 21 6 20.105 6 19 6 17.895 5.105 17 4 17 2.895 17 2 17.895 2 19 2 20.105 2.895 21 4 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Blinds.displayName = "Blinds";

Blinds.metadata = {
  name: "Blinds",
  category: "stroke/home",
  tags: ["blinds", "icon"],
  description: "Blinds icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Blinds;
