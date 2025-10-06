import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareArrowUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareArrowUp(
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
        d="M16 12 12 8 8 12M12 16V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareArrowUp.displayName = "SquareArrowUp";

SquareArrowUp.metadata = {
  name: "SquareArrowUp",
  category: "stroke/arrows",
  tags: ["square", "arrow", "up", "icon"],
  description: "SquareArrowUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareArrowUp;
