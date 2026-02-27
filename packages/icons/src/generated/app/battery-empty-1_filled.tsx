/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryEmpty1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryEmpty1Filled = React.forwardRef<SVGSVGElement, BatteryEmpty1FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12.93 4.79004H7.35C3.25 4.79004 2 6.04004 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04004 17.03 4.79004 12.93 4.79004Z" fill="currentColor"/>
<path d="M20.42 8.99998C20.28 8.98998 20.1 8.97998 19.9 8.97998C19.51 8.97998 19.2 9.28998 19.2 9.67998V14.33C19.2 14.72 19.51 15.03 19.9 15.03C20.1 15.03 20.27 15.02 20.44 15.01C22 14.83 22 13.73 22 12.93V11.07C22 10.27 22 9.16998 20.42 8.99998Z" fill="currentColor"/>
    </svg>
  )
);
BatteryEmpty1Filled.displayName = "BatteryEmpty1Filled";
export const BatteryEmpty1FilledMetadata = { 
  id: "battery-empty-1_filled", 
  baseId: "battery-empty-1", 
  variant: "filled", 
  name: "Battery Empty 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryEmpty1Filled;
