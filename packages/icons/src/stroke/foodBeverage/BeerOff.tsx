import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BeerOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BeerOff(
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
        d="M13 13V18M17 11.47V8M17 11H18C18.499 11 18.991 11.125 19.429 11.362 19.868 11.6 20.241 11.944 20.514 12.362 20.786 12.78 20.95 13.26 20.99 13.757 21.031 14.255 20.947 14.754 20.745 15.211M2 2 22 22M5 8V20C5 20.53 5.211 21.039 5.586 21.414 5.961 21.789 6.47 22 7 22H15C15.53 22 16.039 21.789 16.414 21.414 16.789 21.039 17 20.53 17 20V17M7.536 7.535C6.766 7.649 6.154 8 5.5 8 5.005 8 4.522 7.854 4.111 7.579 3.7 7.304 3.379 6.914 3.19 6.457 3.001 6 2.951 5.497 3.048 5.012 3.144 4.527 3.382 4.082 3.732 3.732M8.727 3.204C9.306 2.767 9.885 2 11 2 12.56 2 13 3.5 14 3.5 15 3.5 15.72 3 16.5 3 17.163 3 17.799 3.263 18.268 3.732 18.737 4.201 19 4.837 19 5.5 19 6.163 18.737 6.799 18.268 7.268 17.799 7.737 17.163 8 16.5 8 15.72 8 15 7.5 14 7.5 13.715 7.502 13.432 7.542 13.158 7.62M9 14.6V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BeerOff.displayName = "BeerOff";

BeerOff.metadata = {
  name: "BeerOff",
  category: "stroke/foodBeverage",
  tags: ["beer", "off", "icon"],
  description: "BeerOff icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BeerOff;
