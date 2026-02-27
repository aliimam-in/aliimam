/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BusRounded = React.forwardRef<SVGSVGElement, BusRoundedProps>(
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
      <path d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.49451 17.7H8.50349"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4945 17.7H15.5035"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 5H14.5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BusRounded.displayName = "BusRounded";
export const BusRoundedMetadata = { 
  id: "bus_rounded", 
  baseId: "bus", 
  variant: "rounded", 
  name: "Bus", 
  category: "transport", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BusRounded;
