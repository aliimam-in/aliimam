import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUpDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUpDown(
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
        d="M21 16 17 20 13 16M17 20V4M3 8 7 4 11 8M7 4V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUpDown.displayName = "ArrowUpDown";

ArrowUpDown.metadata = {
  name: "ArrowUpDown",
  category: "stroke/arrows",
  tags: ["arrow", "up", "down", "icon"],
  description: "ArrowUpDown icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpDown;
