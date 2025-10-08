import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowDown10: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowDown10(
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
        d="M3 16 7 20 11 16M7 20V4M17 10V4H15M15 10H19M19 16C19 14.895 18.105 14 17 14 15.895 14 15 14.895 15 16V18C15 19.105 15.895 20 17 20 18.105 20 19 19.105 19 18V16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowDown10.displayName = "ArrowDown10";

ArrowDown10.metadata = {
  name: "ArrowDown10",
  category: "stroke/layout",
  tags: ["arrow", "down", "icon"],
  description: "ArrowDown10 icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDown10;
