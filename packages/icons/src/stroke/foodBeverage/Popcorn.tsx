import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Popcorn: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Popcorn(
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
        d="M18 8C18.53 8 19.039 7.789 19.414 7.414 19.789 7.039 20 6.53 20 6 20 5.47 19.789 4.961 19.414 4.586 19.039 4.211 18.53 4 18 4 18 3.47 17.789 2.961 17.414 2.586 17.039 2.211 16.53 2 16 2 15.47 2 14.961 2.211 14.586 2.586 14.211 2.961 14 3.47 14 4 14 3.47 13.789 2.961 13.414 2.586 13.039 2.211 12.53 2 12 2 11.47 2 10.961 2.211 10.586 2.586 10.211 2.961 10 3.47 10 4 10 3.47 9.789 2.961 9.414 2.586 9.039 2.211 8.53 2 8 2 7.47 2 6.961 2.211 6.586 2.586 6.211 2.961 6 3.47 6 4 5.47 4 4.961 4.211 4.586 4.586 4.211 4.961 4 5.47 4 6 4 6.53 4.211 7.039 4.586 7.414 4.961 7.789 5.47 8 6 8M10 22 9 8M14 22 15 8M20 8C20.5 8 20.9 8.4 20.8 9L18.2 21C18.1 21.5 17.5 22 17 22H7C6.4 22 5.9 21.6 5.8 21L3.2 9C3.1 8.4 3.5 8 4 8H20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Popcorn.displayName = "Popcorn";

Popcorn.metadata = {
  name: "Popcorn",
  category: "stroke/foodBeverage",
  tags: ["popcorn", "icon"],
  description: "Popcorn icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Popcorn;
