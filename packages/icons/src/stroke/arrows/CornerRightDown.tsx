import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerRightDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerRightDown(
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
        d="M10 15L15 20L20 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4H11C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerRightDown.displayName = "CornerRightDown";

CornerRightDown.metadata = {
  name: "CornerRightDown",
  category: "stroke/arrows",
  tags: ["corner", "right", "down", "icon"],
  description: "CornerRightDown icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerRightDown;
