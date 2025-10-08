import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BedDouble: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BedDouble(
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
        d="M2 20V12C2 11.47 2.211 10.961 2.586 10.586 2.961 10.211 3.47 10 4 10H20C20.53 10 21.039 10.211 21.414 10.586 21.789 10.961 22 11.47 22 12V20M4 10V6C4 5.47 4.211 4.961 4.586 4.586 4.961 4.211 5.47 4 6 4H18C18.53 4 19.039 4.211 19.414 4.586 19.789 4.961 20 5.47 20 6V10M12 4V10M2 18H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BedDouble.displayName = "BedDouble";

BedDouble.metadata = {
  name: "BedDouble",
  category: "stroke/home",
  tags: ["bed", "double", "icon"],
  description: "BedDouble icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BedDouble;
