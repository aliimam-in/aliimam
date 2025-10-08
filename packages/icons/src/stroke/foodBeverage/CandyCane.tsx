import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CandyCane: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CandyCane(
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
        d="M5.7 21C5.569 21.23 5.393 21.432 5.184 21.594 4.975 21.756 4.736 21.875 4.48 21.945 3.965 22.085 3.414 22.015 2.95 21.75 2.486 21.485 2.146 21.046 2.005 20.53 1.865 20.015 1.935 19.464 2.2 19L10.8 5C11.596 3.621 12.907 2.614 14.444 2.202 15.982 1.789 17.621 2.004 19 2.8 20.379 3.596 21.386 4.907 21.798 6.444 22.211 7.982 21.996 9.621 21.2 11 21.07 11.229 20.895 11.431 20.687 11.592 20.478 11.754 20.24 11.873 19.985 11.942 19.731 12.011 19.465 12.029 19.204 11.995 18.942 11.961 18.69 11.876 18.461 11.744 18.233 11.612 18.033 11.436 17.873 11.226 17.712 11.017 17.595 10.778 17.528 10.523 17.46 10.268 17.444 10.002 17.48 9.741 17.516 9.479 17.603 9.228 17.736 9 17.869 8.773 17.957 8.521 17.992 8.26 18.028 7.998 18.012 7.732 17.944 7.477 17.877 7.222 17.76 6.983 17.599 6.774 17.439 6.564 17.239 6.388 17.011 6.257 16.782 6.125 16.53 6.039 16.268 6.005 16.007 5.971 15.741 5.989 15.487 6.058 15.232 6.128 14.994 6.246 14.785 6.408 14.577 6.57 14.402 6.771 14.272 7L5.7 21ZM17.75 7 15 2.1M10.9 4.8 13 9M7.9 9.7 9.9 14.1M4.9 14.7 7 18.9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CandyCane.displayName = "CandyCane";

CandyCane.metadata = {
  name: "CandyCane",
  category: "stroke/foodBeverage",
  tags: ["candy", "cane", "icon"],
  description: "CandyCane icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CandyCane;
