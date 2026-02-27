/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GridLockRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GridLockRounded = React.forwardRef<SVGSVGElement, GridLockRoundedProps>(
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
      <path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.03 8.5H22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.03 15.5H12"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.51001 21.99V2.01001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.51 11.99V2.01001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.6 17.2V16.4C15.6 15.07 16 14 18 14C20 14 20.4 15.07 20.4 16.4V17.2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 22H16C14.4 22 14 21.6 14 20V19.2C14 17.6 14.4 17.2 16 17.2H20C21.6 17.2 22 17.6 22 19.2V20C22 21.6 21.6 22 20 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GridLockRounded.displayName = "GridLockRounded";
export const GridLockRoundedMetadata = { 
  id: "grid-lock_rounded", 
  baseId: "grid-lock", 
  variant: "rounded", 
  name: "Grid Lock", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GridLockRounded;
