import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronLast: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronLast(
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
        d="M7 18 13 12 7 6M17 6V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronLast.displayName = "ChevronLast";

ChevronLast.metadata = {
  name: "ChevronLast",
  category: "stroke/arrows",
  tags: ["chevron", "last", "icon"],
  description: "ChevronLast icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronLast;
