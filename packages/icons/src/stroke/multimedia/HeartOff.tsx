import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HeartOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HeartOff(
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
        d="M10.5 4.893C10.903 5.154 11.27 5.467 11.591 5.824 11.643 5.88 11.707 5.925 11.777 5.955 11.847 5.986 11.923 6.001 12 6.001 12.077 6.001 12.153 5.986 12.223 5.955 12.293 5.925 12.357 5.88 12.409 5.824 13.15 4.991 14.128 4.403 15.212 4.14 16.295 3.876 17.434 3.948 18.475 4.347 19.516 4.747 20.411 5.453 21.041 6.374 21.671 7.294 22.005 8.385 22 9.5 22 11.372 20.998 12.856 19.813 14.155M16.967 16.967 13.508 20.313C13.322 20.527 13.092 20.699 12.834 20.817 12.576 20.936 12.296 20.998 12.012 21 11.729 21.002 11.448 20.943 11.188 20.828 10.929 20.713 10.697 20.544 10.508 20.332L5 15C3.5 13.5 2 11.8 2 9.5 2 8.535 2.254 7.587 2.736 6.752 3.218 5.916 3.912 5.222 4.747 4.739M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HeartOff.displayName = "HeartOff";

HeartOff.metadata = {
  name: "HeartOff",
  category: "stroke/multimedia",
  tags: ["heart", "off", "icon"],
  description: "HeartOff icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HeartOff;
