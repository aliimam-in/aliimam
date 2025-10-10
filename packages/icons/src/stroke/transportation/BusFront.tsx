import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BusFront: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BusFront(
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
        d="M4 6 2 7M10 6H14M22 7 20 6M18 3H6C4.895 3 4 3.895 4 5V17C4 18.105 4.895 19 6 19H18C19.105 19 20 18.105 20 17V5C20 3.895 19.105 3 18 3ZM4 11H20M8 15H8.01M16 15H16.01M6 19V21M18 21V19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BusFront.displayName = "BusFront";

BusFront.metadata = {
  name: "BusFront",
  category: "stroke/transportation",
  tags: ["bus", "front", "icon"],
  description: "BusFront icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BusFront;
