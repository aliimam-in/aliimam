import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SatelliteDish: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SatelliteDish(
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
        d="M4 10C3.184 11.395 2.854 13.021 3.061 14.624 3.267 16.227 3.999 17.716 5.142 18.858 6.284 20.001 7.774 20.733 9.376 20.939 10.979 21.146 12.605 20.816 14 20L4 10ZM9 15 12 12M17 13C17 11.409 16.368 9.883 15.243 8.757 14.117 7.632 12.591 7 11 7M21 13C21 10.348 19.946 7.804 18.071 5.929 16.196 4.054 13.652 3 11 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SatelliteDish.displayName = "SatelliteDish";

SatelliteDish.metadata = {
  name: "SatelliteDish",
  category: "stroke/connectivity",
  tags: ["satellite", "dish", "icon"],
  description: "SatelliteDish icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SatelliteDish;
