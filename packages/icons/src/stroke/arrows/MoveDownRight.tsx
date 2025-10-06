import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveDownRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveDownRight(
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
        d="M19 13V19H13M5 5 19 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveDownRight.displayName = "MoveDownRight";

MoveDownRight.metadata = {
  name: "MoveDownRight",
  category: "stroke/arrows",
  tags: ["move", "down", "right", "icon"],
  description: "MoveDownRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveDownRight;
