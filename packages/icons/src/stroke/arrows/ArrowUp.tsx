import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUp(
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
        d="M5 12 12 5 19 12M12 19V5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUp.displayName = "ArrowUp";

ArrowUp.metadata = {
  name: "ArrowUp",
  category: "stroke/arrows",
  tags: ["arrow", "up", "icon"],
  description: "ArrowUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUp;
