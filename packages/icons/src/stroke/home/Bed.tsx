import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bed: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Bed(
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
          d="M2 4V20M2 8H20C20.53 8 21.039 8.211 21.414 8.586 21.789 8.961 22 9.47 22 10V20M2 17H22M6 8V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bed.displayName = "Bed";

Bed.metadata = {
  name: "Bed",
  category: "stroke/home",
  tags: ["bed", "icon"],
  description: "Bed icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bed;
