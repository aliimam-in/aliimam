/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryDisableRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryDisableRounded = React.forwardRef<SVGSVGElement, BatteryDisableRoundedProps>(
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
<path d="M4 21.5L16 2.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5C3 5 2 6 2 10V14C2 17.4 2.72 18.63 5.39 18.92" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 19C17 19 18 18 18 14V10C18 6.61 17.28 5.37 14.63 5.08" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BatteryDisableRounded.displayName = "BatteryDisableRounded";
export const BatteryDisableRoundedMetadata = { 
  id: "battery-disable_rounded", 
  baseId: "battery-disable", 
  variant: "rounded", 
  name: "Battery Disable", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryDisableRounded;
