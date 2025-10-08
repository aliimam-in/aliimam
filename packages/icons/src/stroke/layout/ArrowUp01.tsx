import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUp01: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUp01(
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
        d="M3 8 7 4 11 8M7 4V20M19 6C19 4.895 18.105 4 17 4 15.895 4 15 4.895 15 6V8C15 9.105 15.895 10 17 10 18.105 10 19 9.105 19 8V6ZM17 20V14H15M15 20H19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUp01.displayName = "ArrowUp01";

ArrowUp01.metadata = {
  name: "ArrowUp01",
  category: "stroke/layout",
  tags: ["arrow", "up", "icon"],
  description: "ArrowUp01 icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUp01;
