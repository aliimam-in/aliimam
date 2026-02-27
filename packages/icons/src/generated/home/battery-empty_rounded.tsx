/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryEmptyRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryEmptyRounded = React.forwardRef<SVGSVGElement, BatteryEmptyRoundedProps>(
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
      <path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BatteryEmptyRounded.displayName = "BatteryEmptyRounded";
export const BatteryEmptyRoundedMetadata = { 
  id: "battery-empty_rounded", 
  baseId: "battery-empty", 
  variant: "rounded", 
  name: "Battery Empty", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryEmptyRounded;
