/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryChargingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryCharging = React.forwardRef<SVGSVGElement, BatteryChargingProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
BatteryCharging.displayName = "BatteryCharging";
export const BatteryChargingMetadata = { 
  id: "battery-charging", 
  baseId: "battery-charging", 
  variant: "default", 
  name: "Battery Charging", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryCharging;
