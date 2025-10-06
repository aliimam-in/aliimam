import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Torus: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Torus(
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
          d="M12 13C13.6569 13 15 12.1046 15 11C15 9.89543 13.6569 9 12 9C10.3431 9 9 9.89543 9 11C9 12.1046 10.3431 13 12 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21C17.5228 21 22 17.1944 22 12.5C22 7.80558 17.5228 4 12 4C6.47715 4 2 7.80558 2 12.5C2 17.1944 6.47715 21 12 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Torus.displayName = "Torus";

Torus.metadata = {
  name: "Torus",
  category: "stroke/design",
  tags: ["torus", "icon"],
  description: "Torus icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Torus;
