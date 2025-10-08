import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BluetoothConnectedProps extends IconProps {
  type?: "stroke";
}

export const BluetoothConnected: IconComponent<BluetoothConnectedProps> =
  React.forwardRef<SVGSVGElement, BluetoothConnectedProps>(
    function BluetoothConnected(
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
        type = "stroke",
        ...props
      },
      forwardedRef,
    ) {
      if (type === "stroke") {
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
              d="M7 7 17 17 12 22V2L17 7 7 17M18 12H21M3 12H6"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      if (type === "stroke") {
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
              d="M7 7 17 17 12 22V2L17 7 7 17M18 12H21M3 12H6"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BluetoothConnected doesn't support ${type}`);
      return null;
    },
  );

BluetoothConnected.displayName = "BluetoothConnected";

BluetoothConnected.metadata = {
  name: "BluetoothConnected",
  category: "stroke/devices",
  tags: ["bluetooth", "connected", "icon"],
  description: "BluetoothConnected icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BluetoothConnected;
