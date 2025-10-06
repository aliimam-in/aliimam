import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WifiSync: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WifiSync(
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
        d="M11.965 10.105V14.105L13.5 12.5C14.074 11.948 14.772 11.542 15.534 11.314 16.297 11.086 17.104 11.044 17.886 11.191 18.669 11.337 19.405 11.669 20.033 12.158 20.662 12.646 21.165 13.278 21.5 14M11.965 14.105H15.965M17.965 18.105H21.965L20.43 19.71C19.856 20.262 19.159 20.668 18.396 20.896 17.633 21.124 16.827 21.166 16.044 21.019 15.261 20.873 14.525 20.541 13.897 20.053 13.268 19.564 12.765 18.932 12.43 18.21M2 8.82C4.75 6.36 8.31 5 12 5 15.69 5 19.25 6.36 22 8.82M21.965 22.105V18.105M5 12.86C5.868 12.006 6.885 11.317 8 10.828M8.5 16.429H8.51"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WifiSync.displayName = "WifiSync";

WifiSync.metadata = {
  name: "WifiSync",
  category: "stroke/connectivity",
  tags: ["wifi", "sync", "icon"],
  description: "WifiSync icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WifiSync;
