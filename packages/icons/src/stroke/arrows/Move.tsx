import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Move: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Move(
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
          d="M12 2V22M15 19 12 22 9 19M19 9 22 12 19 15M2 12H22M5 9 2 12 5 15M9 5 12 2 15 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Move.displayName = "Move";

Move.metadata = {
  name: "Move",
  category: "stroke/arrows",
  tags: ["move", "icon"],
  description: "Move icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Move;
