import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerUpRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerUpRight(
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
        d="M15 14L20 9L15 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20V13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerUpRight.displayName = "CornerUpRight";

CornerUpRight.metadata = {
  name: "CornerUpRight",
  category: "stroke/arrows",
  tags: ["corner", "up", "right", "icon"],
  description: "CornerUpRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerUpRight;
