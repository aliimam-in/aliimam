import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareArrowUpLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareArrowUpLeft(
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
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16V8H16M16 16 8 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareArrowUpLeft.displayName = "SquareArrowUpLeft";

SquareArrowUpLeft.metadata = {
  name: "SquareArrowUpLeft",
  category: "stroke/arrows",
  tags: ["square", "arrow", "up", "left", "icon"],
  description: "SquareArrowUpLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareArrowUpLeft;
