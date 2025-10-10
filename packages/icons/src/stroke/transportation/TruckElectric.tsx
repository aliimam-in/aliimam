import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TruckElectric: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TruckElectric(
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
        d="M14 19V7C14 6.47 13.789 5.961 13.414 5.586 13.039 5.211 12.53 5 12 5H9M15 19H9M19 19H21C21.265 19 21.52 18.895 21.707 18.707 21.895 18.52 22 18.265 22 18V14.35C21.999 14.124 21.921 13.906 21.78 13.73L18.3 9.38C18.207 9.262 18.088 9.167 17.953 9.101 17.818 9.035 17.67 9.001 17.52 9H14M2 13V18C2 18.265 2.105 18.52 2.293 18.707 2.48 18.895 2.735 19 3 19H5M4 3 2.15 5.15C2.076 5.218 2.024 5.308 2.001 5.406 1.979 5.505 1.988 5.608 2.026 5.702 2.064 5.796 2.13 5.875 2.215 5.93 2.299 5.985 2.399 6.013 2.5 6.01H4.65C4.759 5.984 4.874 5.999 4.973 6.05 5.073 6.102 5.15 6.187 5.193 6.29 5.235 6.394 5.239 6.51 5.203 6.616 5.168 6.722 5.096 6.812 5 6.87L3 9.02"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21C18.105 21 19 20.105 19 19 19 17.895 18.105 17 17 17 15.895 17 15 17.895 15 19 15 20.105 15.895 21 17 21ZM7 21C8.105 21 9 20.105 9 19 9 17.895 8.105 17 7 17 5.895 17 5 17.895 5 19 5 20.105 5.895 21 7 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TruckElectric.displayName = "TruckElectric";

TruckElectric.metadata = {
  name: "TruckElectric",
  category: "stroke/transportation",
  tags: ["truck", "electric", "icon"],
  description: "TruckElectric icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TruckElectric;
