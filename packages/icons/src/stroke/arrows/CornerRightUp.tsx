import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerRightUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerRightUp(
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
        d="M10 9L15 4L20 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerRightUp.displayName = "CornerRightUp";

CornerRightUp.metadata = {
  name: "CornerRightUp",
  category: "stroke/arrows",
  tags: ["corner", "right", "up", "icon"],
  description: "CornerRightUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerRightUp;
