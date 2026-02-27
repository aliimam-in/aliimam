/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WifiSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WifiSquareRounded = React.forwardRef<SVGSVGElement, WifiSquareRoundedProps>(
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
      <path d="M6 9.96001C9.63 7.15001 14.37 7.15001 18 9.96001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.60001 13.05C10.27 10.99 13.74 10.99 16.41 13.05"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.8 16.14C11.13 15.11 12.87 15.11 14.2 16.14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WifiSquareRounded.displayName = "WifiSquareRounded";
export const WifiSquareRoundedMetadata = { 
  id: "wifi-square_rounded", 
  baseId: "wifi-square", 
  variant: "rounded", 
  name: "Wifi Square", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WifiSquareRounded;
