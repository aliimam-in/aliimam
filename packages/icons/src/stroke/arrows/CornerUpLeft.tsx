import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerUpLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerUpLeft(
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
        d="M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14L4 9L9 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerUpLeft.displayName = "CornerUpLeft";

CornerUpLeft.metadata = {
  name: "CornerUpLeft",
  category: "stroke/arrows",
  tags: ["corner", "up", "left", "icon"],
  description: "CornerUpLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerUpLeft;
