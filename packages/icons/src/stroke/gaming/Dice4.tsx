import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Dice4: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Dice4(
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
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM16 8H16.01M8 8H8.01M8 16H8.01M16 16H16.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Dice4.displayName = "Dice4";

Dice4.metadata = {
  name: "Dice4",
  category: "stroke/gaming",
  tags: ["dice", "icon"],
  description: "Dice4 icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dice4;
