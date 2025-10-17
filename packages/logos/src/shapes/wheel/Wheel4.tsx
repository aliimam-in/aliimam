import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wheel4: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wheel4(
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
          d="M14.4 0H9.6V6.20588L5.21178 1.81766L1.81766 5.21177L6.2059 9.6H0V14.4H6.20588L1.81766 18.7882L5.21178 22.1824L9.6 17.7941V24H14.4V17.7941L18.7883 22.1824L22.1824 18.7883L17.7941 14.4H24V9.6H17.7941L22.1824 5.21177L18.7883 1.81765L14.4 6.20588V0Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

Wheel4.displayName = "Wheel4";

Wheel4.metadata = {
  name: "Wheel4",
  category: "shapes/wheel",
  tags: ["wheel", "icon"],
  description: "Wheel4 icon from shapes/wheel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wheel4;
