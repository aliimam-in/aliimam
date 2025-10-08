import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Swords: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Swords(
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
          d="M14.5 17.5 3 6V3H6L17.5 14.5M13 19 19 13M16 16 20 20M19 21 21 19M14.5 6.5 18 3H21V6L17.5 9.5M5 14 9 18M7 17 4 20M3 19 5 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Swords.displayName = "Swords";

Swords.metadata = {
  name: "Swords",
  category: "stroke/gaming",
  tags: ["swords", "icon"],
  description: "Swords icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Swords;
