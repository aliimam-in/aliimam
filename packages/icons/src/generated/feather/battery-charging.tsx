/**
 * Auto-generated logo component: Battery Charging (default)
 * Category: feather
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
      <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/>
    </svg>
  )
);

BatteryChargingLogo.displayName = "BatteryChargingLogo";

export const BatteryChargingLogoMetadata = {
  id: "battery-charging",
  baseId: "battery-charging",
  variant: "default",
  name: "Battery Charging",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatteryChargingLogo;
