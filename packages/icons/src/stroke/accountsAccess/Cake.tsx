import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cake: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cake(
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
          d="M20 21V13C20 12.4696 19.7893 11.9609 19.4142 11.5858C19.0391 11.2107 18.5304 11 18 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16C4 16 4.5 15 6 15 7.5 15 8.5 17 10 17 11.5 17 12.5 15 14 15 15.5 15 16.5 17 18 17 19.5 17 20 16 20 16M2 21H22M7 8V11M12 8V11M17 8V11M7 4H7.01M12 4H12.01M17 4H17.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cake.displayName = "Cake";

Cake.metadata = {
  name: "Cake",
  category: "stroke/accountsAccess",
  tags: ["cake", "icon"],
  description: "Cake icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cake;
