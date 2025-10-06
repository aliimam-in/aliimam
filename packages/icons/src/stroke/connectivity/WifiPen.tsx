import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WifiPen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WifiPen(
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
        d="M2 8.82C4.75 6.36 8.31 5 12 5 15.69 5 19.25 6.36 22 8.82M21.378 16.626C21.776 16.228 22 15.687 22 15.124 22 14.561 21.776 14.02 21.378 13.622 20.98 13.224 20.439 13 19.876 13 19.313 13 18.772 13.224 18.374 13.622L14.364 17.634C14.126 17.872 13.952 18.165 13.858 18.488L13.021 21.358C12.996 21.444 12.994 21.535 13.017 21.622 13.039 21.709 13.084 21.788 13.147 21.852 13.211 21.915 13.29 21.96 13.377 21.982 13.464 22.005 13.555 22.003 13.641 21.978L16.511 21.141C16.834 21.047 17.127 20.873 17.365 20.635L21.378 16.626ZM5 12.859C6.358 11.529 8.067 10.614 9.927 10.22 11.786 9.827 13.72 9.971 15.5 10.637M8.5 16.429C9.311 15.633 10.369 15.137 11.5 15.023"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WifiPen.displayName = "WifiPen";

WifiPen.metadata = {
  name: "WifiPen",
  category: "stroke/connectivity",
  tags: ["wifi", "pen", "icon"],
  description: "WifiPen icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WifiPen;
