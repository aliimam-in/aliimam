import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUp10: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUp10(
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
        d="M3 8 7 4 11 8M7 4V20M17 10V4H15M15 10H19M19 16C19 14.895 18.105 14 17 14 15.895 14 15 14.895 15 16V18C15 19.105 15.895 20 17 20 18.105 20 19 19.105 19 18V16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUp10.displayName = "ArrowUp10";

ArrowUp10.metadata = {
  name: "ArrowUp10",
  category: "stroke/textFormatting",
  tags: ["arrow", "up", "icon"],
  description: "ArrowUp10 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUp10;
