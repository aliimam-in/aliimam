import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BedSingle: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BedSingle(
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
        d="M3 20V12C3 11.47 3.211 10.961 3.586 10.586 3.961 10.211 4.47 10 5 10H19C19.53 10 20.039 10.211 20.414 10.586 20.789 10.961 21 11.47 21 12V20M5 10V6C5 5.47 5.211 4.961 5.586 4.586 5.961 4.211 6.47 4 7 4H17C17.53 4 18.039 4.211 18.414 4.586 18.789 4.961 19 5.47 19 6V10M3 18H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BedSingle.displayName = "BedSingle";

BedSingle.metadata = {
  name: "BedSingle",
  category: "stroke/home",
  tags: ["bed", "single", "icon"],
  description: "BedSingle icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BedSingle;
