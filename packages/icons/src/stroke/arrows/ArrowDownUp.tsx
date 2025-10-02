import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowDownUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowDownUp(
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
        d="M3 16 7 20 11 16M7 20V4M21 8 17 4 13 8M17 4V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowDownUp.displayName = "ArrowDownUp";

ArrowDownUp.metadata = {
  name: "ArrowDownUp",
  category: "stroke/arrows",
  tags: ["arrow", "down", "up", "icon"],
  description: "ArrowDownUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownUp;
