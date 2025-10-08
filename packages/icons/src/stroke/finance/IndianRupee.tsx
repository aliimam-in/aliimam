import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const IndianRupee: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function IndianRupee(
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
        d="M6 3H18M6 8H18M6 13 14.5 21M6 13H9M9 13C15.667 13 15.667 3 9 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

IndianRupee.displayName = "IndianRupee";

IndianRupee.metadata = {
  name: "IndianRupee",
  category: "stroke/finance",
  tags: ["indian", "rupee", "icon"],
  description: "IndianRupee icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default IndianRupee;
