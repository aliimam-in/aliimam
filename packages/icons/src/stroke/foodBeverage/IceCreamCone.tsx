import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const IceCreamCone: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function IceCreamCone(
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
        d="M7 11 11.08 21.35C11.157 21.53 11.285 21.684 11.449 21.792 11.612 21.9 11.804 21.958 12 21.958 12.196 21.958 12.388 21.9 12.551 21.792 12.715 21.684 12.843 21.53 12.92 21.35L17 11M17 7C17 5.674 16.473 4.402 15.536 3.464 14.598 2.527 13.326 2 12 2 10.674 2 9.402 2.527 8.464 3.464 7.527 4.402 7 5.674 7 7M17 7C17.53 7 18.039 7.211 18.414 7.586 18.789 7.961 19 8.47 19 9 19 9.53 18.789 10.039 18.414 10.414 18.039 10.789 17.53 11 17 11H7C6.47 11 5.961 10.789 5.586 10.414 5.211 10.039 5 9.53 5 9 5 8.47 5.211 7.961 5.586 7.586 5.961 7.211 6.47 7 7 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

IceCreamCone.displayName = "IceCreamCone";

IceCreamCone.metadata = {
  name: "IceCreamCone",
  category: "stroke/foodBeverage",
  tags: ["ice", "cream", "cone", "icon"],
  description: "IceCreamCone icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default IceCreamCone;
