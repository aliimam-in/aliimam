/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DriverRefreshRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DriverRefreshRounded = React.forwardRef<SVGSVGElement, DriverRefreshRoundedProps>(
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
      <path d="M6 6.25V8.25" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6.25V8.25" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16V18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16V18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7.25H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.56 20.33C21 21.3 19.95 21.95 18.75 21.95C16.96 21.95 15.86 20.15 15.86 20.15M15.93 17.09C16.49 16.11 17.54 15.46 18.75 15.46C20.92 15.46 22 17.26 22 17.26M22 15.25V17.25H20M17.86 20.14H15.86V22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DriverRefreshRounded.displayName = "DriverRefreshRounded";
export const DriverRefreshRoundedMetadata = { 
  id: "driver-refresh_rounded", 
  baseId: "driver-refresh", 
  variant: "rounded", 
  name: "Driver Refresh", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DriverRefreshRounded;
