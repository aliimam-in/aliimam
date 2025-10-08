import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EggFried: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function EggFried(
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
        d="M11.5 16C13.433 16 15 14.433 15 12.5C15 10.567 13.433 9 11.5 9C9.567 9 8 10.567 8 12.5C8 14.433 9.567 16 11.5 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8C3 4.5 5.5 2 9.5 2C14.5 2 14.33 5 17 7C19.67 9 22 9 22 13C22 17.5 19.5 19.5 15 19.5C12.5 19.5 12.5 22 9 22C5.5 22 2 20 2 16.5C2 13.5 3.5 13.5 3.5 11.5C3.5 10 3 9 3 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

EggFried.displayName = "EggFried";

EggFried.metadata = {
  name: "EggFried",
  category: "stroke/foodBeverage",
  tags: ["egg", "fried", "icon"],
  description: "EggFried icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EggFried;
