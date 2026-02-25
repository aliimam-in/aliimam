/**
 * Auto-generated logo component: Battery Charging (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatteryChargingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatteryChargingLogo = React.forwardRef<SVGSVGElement, BatteryChargingLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m11 7-3 5h4l-3 5" />
  <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
  <path d="M22 14v-4" />
  <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
    </svg>
  )
);

BatteryChargingLogo.displayName = "BatteryChargingLogo";

export const BatteryChargingLogoMetadata = {
  id: "battery-charging",
  baseId: "battery-charging",
  variant: "default",
  name: "Battery Charging",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryChargingLogo;
