import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUpNarrowWide: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUpNarrowWide(
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
        d="M3 8 7 4 11 8M7 4V20M11 12H15M11 16H18M11 20H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUpNarrowWide.displayName = "ArrowUpNarrowWide";

ArrowUpNarrowWide.metadata = {
  name: "ArrowUpNarrowWide",
  category: "stroke/arrows",
  tags: ["arrow", "up", "narrow", "wide", "icon"],
  description: "ArrowUpNarrowWide icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpNarrowWide;
