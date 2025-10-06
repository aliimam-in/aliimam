import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FlipHorizontal2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FlipHorizontal2(
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
        d="M3 7 8 12 3 17V7ZM21 7 16 12 21 17V7ZM12 20V22M12 14V16M12 8V10M12 2V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FlipHorizontal2.displayName = "FlipHorizontal2";

FlipHorizontal2.metadata = {
  name: "FlipHorizontal2",
  category: "stroke/design",
  tags: ["flip", "horizontal", "icon"],
  description: "FlipHorizontal2 icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlipHorizontal2;
