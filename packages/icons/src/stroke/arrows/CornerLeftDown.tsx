import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CornerLeftDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CornerLeftDown(
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
        d="M14 15L9 20L4 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4H13C11.9391 4 10.9217 4.42143 10.1716 5.17157C9.42143 5.92172 9 6.93913 9 8V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CornerLeftDown.displayName = "CornerLeftDown";

CornerLeftDown.metadata = {
  name: "CornerLeftDown",
  category: "stroke/arrows",
  tags: ["corner", "left", "down", "icon"],
  description: "CornerLeftDown icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CornerLeftDown;
