/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MobileRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MobileRounded = React.forwardRef<SVGSVGElement, MobileRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 18 22"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16.75 5.75V15.75C16.75 19.75 15.75 20.75 11.75 20.75H5.75C1.75 20.75 0.75 19.75 0.75 15.75V5.75C0.75 1.75 1.75 0.75 5.75 0.75H11.75C15.75 0.75 16.75 1.75 16.75 5.75Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.75 4.25H6.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.75001 17.85C9.60605 17.85 10.3 17.156 10.3 16.3C10.3 15.444 9.60605 14.75 8.75001 14.75C7.89397 14.75 7.20001 15.444 7.20001 16.3C7.20001 17.156 7.89397 17.85 8.75001 17.85Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MobileRounded.displayName = "MobileRounded";
export const MobileRoundedMetadata = { 
  id: "mobile_rounded", 
  baseId: "mobile", 
  variant: "rounded", 
  name: "Mobile", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 18 22" 
} as const;

export default MobileRounded;
