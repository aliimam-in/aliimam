import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MoveHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MoveHorizontal(
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
        d="M18 8 22 12 18 16M2 12H22M6 8 2 12 6 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MoveHorizontal.displayName = "MoveHorizontal";

MoveHorizontal.metadata = {
  name: "MoveHorizontal",
  category: "stroke/arrows",
  tags: ["move", "horizontal", "icon"],
  description: "MoveHorizontal icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoveHorizontal;
