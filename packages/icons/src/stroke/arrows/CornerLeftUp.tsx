import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerLeftUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerLeftUp(
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
        d="M14 9L9 4L4 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20H13C11.9391 20 10.9217 19.5786 10.1716 18.8284C9.42143 18.0783 9 17.0609 9 16V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerLeftUp.displayName = "CornerLeftUp";

CornerLeftUp.metadata = {
  name: "CornerLeftUp",
  category: "stroke/arrows",
  tags: ["corner", "left", "up", "icon"],
  description: "CornerLeftUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerLeftUp;
