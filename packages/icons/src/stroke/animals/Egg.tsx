import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Egg: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Egg(
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
          d="M12 2C8 2 4 8 4 14C4 16.1217 4.84285 18.1566 6.34315 19.6569C7.84344 21.1571 9.87827 22 12 22C14.1217 22 16.1566 21.1571 17.6569 19.6569C19.1571 18.1566 20 16.1217 20 14C20 8 16 2 12 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Egg.displayName = "Egg";

Egg.metadata = {
  name: "Egg",
  category: "stroke/animals",
  tags: ["egg", "icon"],
  description: "Egg icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Egg;
