/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScanRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScanRounded = React.forwardRef<SVGSVGElement, ScanRoundedProps>(
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
      <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12H5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ScanRounded.displayName = "ScanRounded";
export const ScanRoundedMetadata = { 
  id: "scan_rounded", 
  baseId: "scan", 
  variant: "rounded", 
  name: "Scan", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScanRounded;
