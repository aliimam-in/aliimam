import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronUp(
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
        d="M18 15L12 9L6 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronUp.displayName = "ChevronUp";

ChevronUp.metadata = {
  name: "ChevronUp",
  category: "stroke/arrows",
  tags: ["chevron", "up", "icon"],
  description: "ChevronUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronUp;
