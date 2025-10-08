import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CupSoda: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CupSoda(
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
        d="M6 8 7.75 20.28C7.818 20.761 8.058 21.2 8.426 21.517 8.794 21.833 9.265 22.005 9.75 22H14.29C14.775 22.005 15.246 21.833 15.614 21.517 15.982 21.2 16.222 20.761 16.29 20.28L18 8M5 8H19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15C7.792 14.668 8.642 14.498 9.5 14.498 10.358 14.498 11.208 14.668 12 15 12.792 15.332 13.642 15.503 14.5 15.503 15.358 15.503 16.208 15.332 17 15M12 8 13 2H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CupSoda.displayName = "CupSoda";

CupSoda.metadata = {
  name: "CupSoda",
  category: "stroke/foodBeverage",
  tags: ["cup", "soda", "icon"],
  description: "CupSoda icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CupSoda;
