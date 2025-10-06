import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveUp: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function MoveUp(
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
          d="M8 6 12 2 16 6M12 2V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

MoveUp.displayName = "MoveUp";

MoveUp.metadata = {
  name: "MoveUp",
  category: "stroke/arrows",
  tags: ["move", "up", "icon"],
  description: "MoveUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveUp;
