import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MapPinPen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MapPinPen(
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
        d="M17.97 9.304C17.792 7.25 16.827 5.344 15.277 3.983 13.727 2.623 11.712 1.914 9.652 2.004 7.592 2.094 5.646 2.975 4.22 4.465 2.794 5.955 1.999 7.938 2 10 2 14.69 6.887 19.562 9.022 21.468M21.378 16.626C21.776 16.228 22 15.687 22 15.124 22 14.561 21.776 14.02 21.378 13.622 20.98 13.224 20.439 13 19.876 13 19.313 13 18.772 13.224 18.374 13.622L14.364 17.634C14.126 17.872 13.952 18.165 13.858 18.488L13.021 21.358C12.996 21.444 12.994 21.535 13.017 21.622 13.039 21.709 13.084 21.788 13.147 21.852 13.211 21.915 13.29 21.96 13.377 21.982 13.464 22.005 13.555 22.003 13.641 21.978L16.511 21.141C16.834 21.047 17.127 20.873 17.365 20.635L21.378 16.626Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MapPinPen.displayName = "MapPinPen";

MapPinPen.metadata = {
  name: "MapPinPen",
  category: "stroke/accountsAccess",
  tags: ["map", "pin", "pen", "icon"],
  description: "MapPinPen icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MapPinPen;
