/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RamRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RamRounded = React.forwardRef<SVGSVGElement, RamRoundedProps>(
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
      <path d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.98998 21.97L7.97998 19C7.97998 17.89 8.86998 17 9.97998 17H13.99C15.09 17 15.98 17.89 15.99 18.99L16.02 21.98"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.97 7.78003H7.96997"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RamRounded.displayName = "RamRounded";
export const RamRoundedMetadata = { 
  id: "ram_rounded", 
  baseId: "ram", 
  variant: "rounded", 
  name: "Ram", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RamRounded;
