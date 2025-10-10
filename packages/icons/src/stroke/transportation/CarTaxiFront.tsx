import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CarTaxiFront: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CarTaxiFront(
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
        d="M10 2H14M21 8 19 10 17.5 6.3C17.359 5.921 17.106 5.594 16.775 5.362 16.444 5.13 16.05 5.004 15.646 5H8.4C7.993 4.991 7.592 5.106 7.252 5.331 6.912 5.555 6.648 5.879 6.497 6.257L5 10 3 8M7 14H7.01M17 14H17.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10H5C3.895 10 3 10.895 3 12V16C3 17.105 3.895 18 5 18H19C20.105 18 21 17.105 21 16V12C21 10.895 20.105 10 19 10ZM5 18V20M19 18V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CarTaxiFront.displayName = "CarTaxiFront";

CarTaxiFront.metadata = {
  name: "CarTaxiFront",
  category: "stroke/transportation",
  tags: ["car", "taxi", "front", "icon"],
  description: "CarTaxiFront icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CarTaxiFront;
