/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectboxDefaultRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectboxDefaultRounded = React.forwardRef<SVGSVGElement, DirectboxDefaultRoundedProps>(
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
      <path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectboxDefaultRounded.displayName = "DirectboxDefaultRounded";
export const DirectboxDefaultRoundedMetadata = { 
  id: "directbox-default_rounded", 
  baseId: "directbox-default", 
  variant: "rounded", 
  name: "Directbox Default", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectboxDefaultRounded;
