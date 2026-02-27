/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryFullRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryFullRounded = React.forwardRef<SVGSVGElement, BatteryFullRoundedProps>(
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
      <path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.38 10C6.71 11.31 6.71 12.69 6.38 14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.88 10C10.21 11.31 10.21 12.69 9.88 14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.38 10C13.71 11.31 13.71 12.69 13.38 14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BatteryFullRounded.displayName = "BatteryFullRounded";
export const BatteryFullRoundedMetadata = { 
  id: "battery-full_rounded", 
  baseId: "battery-full", 
  variant: "rounded", 
  name: "Battery Full", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryFullRounded;
