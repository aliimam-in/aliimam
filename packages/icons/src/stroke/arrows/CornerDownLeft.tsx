import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerDownLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerDownLeft(
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
        d="M20 4V11C20 12.0609 19.5786 13.0783 18.8284 13.8284C18.0783 14.5786 17.0609 15 16 15H4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10L4 15L9 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerDownLeft.displayName = "CornerDownLeft";

CornerDownLeft.metadata = {
  name: "CornerDownLeft",
  category: "stroke/arrows",
  tags: ["corner", "down", "left", "icon"],
  description: "CornerDownLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerDownLeft;
