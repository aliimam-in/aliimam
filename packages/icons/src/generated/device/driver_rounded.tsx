/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DriverRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DriverRounded = React.forwardRef<SVGSVGElement, DriverRoundedProps>(
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
      <path d="M19.32 10H4.69002C3.21002 10 2.01001 8.79002 2.01001 7.32002V4.69002C2.01001 3.21002 3.22002 2.01001 4.69002 2.01001H19.32C20.8 2.01001 22 3.22002 22 4.69002V7.32002C22 8.79002 20.79 10 19.32 10Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.32 22H4.69002C3.21002 22 2.01001 20.79 2.01001 19.32V16.69C2.01001 15.21 3.22002 14.01 4.69002 14.01H19.32C20.8 14.01 22 15.22 22 16.69V19.32C22 20.79 20.79 22 19.32 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 5V7"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5V7"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 17V19"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17V19"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 6H18"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 18H18"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DriverRounded.displayName = "DriverRounded";
export const DriverRoundedMetadata = { 
  id: "driver_rounded", 
  baseId: "driver", 
  variant: "rounded", 
  name: "Driver", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DriverRounded;
