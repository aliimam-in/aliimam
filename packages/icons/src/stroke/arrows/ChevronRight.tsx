import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronRight(
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
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronRight.displayName = "ChevronRight";

ChevronRight.metadata = {
  name: "ChevronRight",
  category: "stroke/arrows",
  tags: ["chevron", "right", "icon"],
  description: "ChevronRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronRight;
