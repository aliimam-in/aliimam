import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Axis3D: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Axis3D(
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
          d="M13.5 10.5 15 9M4 4V19C4 19.265 4.105 19.52 4.293 19.707 4.48 19.895 4.735 20 5 20H20M4.293 19.707 6 18M9 15 10.5 13.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Axis3D.displayName = "Axis3D";

Axis3D.metadata = {
  name: "Axis3D",
  category: "stroke/design",
  tags: ["axis", "icon"],
  description: "Axis3D icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Axis3D;
