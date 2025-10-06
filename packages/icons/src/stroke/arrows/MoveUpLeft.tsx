import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveUpLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveUpLeft(
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
        d="M5 11V5H11M5 5 19 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveUpLeft.displayName = "MoveUpLeft";

MoveUpLeft.metadata = {
  name: "MoveUpLeft",
  category: "stroke/arrows",
  tags: ["move", "up", "left", "icon"],
  description: "MoveUpLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveUpLeft;
