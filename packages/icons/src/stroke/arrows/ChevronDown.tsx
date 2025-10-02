import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronDown(
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
        d="M6 9L12 15L18 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronDown.displayName = "ChevronDown";

ChevronDown.metadata = {
  name: "ChevronDown",
  category: "stroke/arrows",
  tags: ["chevron", "down", "icon"],
  description: "ChevronDown icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronDown;
