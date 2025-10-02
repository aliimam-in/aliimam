import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUpRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUpRight(
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
        d="M7 7H17V17M7 17 17 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUpRight.displayName = "ArrowUpRight";

ArrowUpRight.metadata = {
  name: "ArrowUpRight",
  category: "stroke/arrows",
  tags: ["arrow", "up", "right", "icon"],
  description: "ArrowUpRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpRight;
