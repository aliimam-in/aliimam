import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowDown01: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowDown01(
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
        d="M3 16 7 20 11 16M7 20V4M19 6C19 4.895 18.105 4 17 4 15.895 4 15 4.895 15 6V8C15 9.105 15.895 10 17 10 18.105 10 19 9.105 19 8V6ZM17 20V14H15M15 20H19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowDown01.displayName = "ArrowDown01";

ArrowDown01.metadata = {
  name: "ArrowDown01",
  category: "stroke/arrows",
  tags: ["arrow", "down", "01", "icon"],
  description: "ArrowDown01 icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDown01;
