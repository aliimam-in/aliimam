import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowDownWideNarrow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowDownWideNarrow(
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
        d="M3 16 7 20 11 16M7 20V4M11 4H21M11 8H18M11 12H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowDownWideNarrow.displayName = "ArrowDownWideNarrow";

ArrowDownWideNarrow.metadata = {
  name: "ArrowDownWideNarrow",
  category: "stroke/arrows",
  tags: ["arrow", "down", "wide", "narrow", "icon"],
  description: "ArrowDownWideNarrow icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownWideNarrow;
