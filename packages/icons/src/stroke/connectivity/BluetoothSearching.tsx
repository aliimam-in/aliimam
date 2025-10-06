import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BluetoothSearching: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BluetoothSearching(
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
        d="M7 7 17 17 12 22V2L17 7 7 17M20.83 14.83C21.202 14.459 21.497 14.017 21.698 13.532 21.9 13.046 22.003 12.526 22.003 12 22.003 11.474 21.9 10.954 21.698 10.468 21.497 9.983 21.202 9.541 20.83 9.17M18 12H18.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BluetoothSearching.displayName = "BluetoothSearching";

BluetoothSearching.metadata = {
  name: "BluetoothSearching",
  category: "stroke/connectivity",
  tags: ["bluetooth", "searching", "icon"],
  description: "BluetoothSearching icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BluetoothSearching;
