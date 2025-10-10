import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MapPlus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MapPlus(
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
        d="M11 19 9.894 18.448C9.616 18.309 9.31 18.237 9 18.237 8.69 18.237 8.384 18.309 8.106 18.448L4.447 20.278C4.294 20.354 4.125 20.39 3.954 20.382 3.784 20.375 3.618 20.323 3.473 20.233 3.328 20.144 3.208 20.018 3.126 19.869 3.043 19.72 3 19.552 3 19.381V6.618C3 6.432 3.052 6.25 3.15 6.092 3.247 5.935 3.387 5.807 3.553 5.724L8.106 3.447C8.384 3.308 8.69 3.236 9 3.236 9.31 3.236 9.616 3.308 9.894 3.447L14.106 5.553C14.384 5.692 14.69 5.764 15 5.764 15.31 5.764 15.616 5.692 15.894 5.553L19.553 3.723C19.706 3.647 19.875 3.611 20.046 3.619 20.216 3.626 20.381 3.678 20.527 3.767 20.672 3.857 20.791 3.983 20.874 4.132 20.957 4.281 21 4.448 21 4.619V12M15 5.764V12M18 15V21M21 18H15M9 3.236V18.236"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MapPlus.displayName = "MapPlus";

MapPlus.metadata = {
  name: "MapPlus",
  category: "stroke/navigation",
  tags: ["map", "plus", "icon"],
  description: "MapPlus icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MapPlus;
