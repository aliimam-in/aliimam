import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BatteryChargingProps extends IconProps {
  type?: "stroke";
}

export const BatteryCharging: IconComponent<BatteryChargingProps> =
  React.forwardRef<SVGSVGElement, BatteryChargingProps>(
    function BatteryCharging(
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
              d="M11 7 8 12H12L9 17M14.856 6H16C16.53 6 17.039 6.211 17.414 6.586 17.789 6.961 18 7.47 18 8V16C18 16.53 17.789 17.039 17.414 17.414 17.039 17.789 16.53 18 16 18H13.065M22 14V10M5.14 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H6.936"
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
              d="M11 7 8 12H12L9 17M14.856 6H16C16.53 6 17.039 6.211 17.414 6.586 17.789 6.961 18 7.47 18 8V16C18 16.53 17.789 17.039 17.414 17.414 17.039 17.789 16.53 18 16 18H13.065M22 14V10M5.14 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H6.936"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BatteryCharging doesn't support ${type}`);
      return null;
    },
  );

BatteryCharging.displayName = "BatteryCharging";

BatteryCharging.metadata = {
  name: "BatteryCharging",
  category: "stroke/devices",
  tags: ["battery", "charging", "icon"],
  description: "BatteryCharging icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BatteryCharging;
