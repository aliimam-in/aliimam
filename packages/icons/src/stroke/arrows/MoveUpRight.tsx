import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveUpRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveUpRight(
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
        d="M13 5H19V11M19 5 5 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveUpRight.displayName = "MoveUpRight";

MoveUpRight.metadata = {
  name: "MoveUpRight",
  category: "stroke/arrows",
  tags: ["move", "up", "right", "icon"],
  description: "MoveUpRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveUpRight;
