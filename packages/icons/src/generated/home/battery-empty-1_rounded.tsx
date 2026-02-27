/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryEmpty1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryEmpty1Rounded = React.forwardRef<SVGSVGElement, BatteryEmpty1RoundedProps>(
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
      <path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.38 10C6.71 11.31 6.71 12.69 6.38 14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BatteryEmpty1Rounded.displayName = "BatteryEmpty1Rounded";
export const BatteryEmpty1RoundedMetadata = { 
  id: "battery-empty-1_rounded", 
  baseId: "battery-empty-1", 
  variant: "rounded", 
  name: "Battery Empty 1", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryEmpty1Rounded;
