import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SeparatorHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SeparatorHorizontal(
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
        d="M16 16 12 20 8 16M3 12H21M8 8 12 4 16 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SeparatorHorizontal.displayName = "SeparatorHorizontal";

SeparatorHorizontal.metadata = {
  name: "SeparatorHorizontal",
  category: "stroke/arrows",
  tags: ["separator", "horizontal", "icon"],
  description: "SeparatorHorizontal icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SeparatorHorizontal;
