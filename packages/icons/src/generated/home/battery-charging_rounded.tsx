/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryChargingRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryChargingRounded = React.forwardRef<SVGSVGElement, BatteryChargingRoundedProps>(
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
      <path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8L8.11001 10.5C7.72001 11.17 8.20001 12 8.97001 12H11.27C12.04 12 12.52 12.83 12.14 13.5L10 16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19C3 19 2 18 2 14V10C2 6 3 5 7 5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 5C17 5 18 6 18 10V14C18 18 17 19 13 19" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BatteryChargingRounded.displayName = "BatteryChargingRounded";
export const BatteryChargingRoundedMetadata = { 
  id: "battery-charging_rounded", 
  baseId: "battery-charging", 
  variant: "rounded", 
  name: "Battery Charging", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryChargingRounded;
