import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SprayCan: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SprayCan(
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
        d="M3 3H3.01M7 5H7.01M11 7H11.01M3 7H3.01M7 9H7.01M3 11H3.01M19 5H15V9H19V5ZM19 9 21 11V21C21 21.6 20.6 22 20 22H14C13.4 22 13 21.6 13 21V11L15 9M13 14 21 12M13 19 21 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SprayCan.displayName = "SprayCan";

SprayCan.metadata = {
  name: "SprayCan",
  category: "stroke/design",
  tags: ["spray", "can", "icon"],
  description: "SprayCan icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SprayCan;
