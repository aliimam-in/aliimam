import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerDownRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerDownRight(
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
        d="M15 10L20 15L15 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerDownRight.displayName = "CornerDownRight";

CornerDownRight.metadata = {
  name: "CornerDownRight",
  category: "stroke/arrows",
  tags: ["corner", "down", "right", "icon"],
  description: "CornerDownRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerDownRight;
