/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrifecaseTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrifecaseTickRounded = React.forwardRef<SVGSVGElement, BrifecaseTickRoundedProps>(
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
      <path d="M12 18.2C14.2091 18.2 16 16.4091 16 14.2C16 11.9909 14.2091 10.2 12 10.2C9.79086 10.2 8 11.9909 8 14.2C8 16.4091 9.79086 18.2 12 18.2Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4399 14.3L11.0899 14.95C11.2799 15.14 11.5899 15.14 11.7799 14.96L13.5599 13.32"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43L21.6999 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.65 11C19.92 12.26 18 13.14 16.01 13.64"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.62 11.27C4.29 12.41 6.11 13.22 8 13.68"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BrifecaseTickRounded.displayName = "BrifecaseTickRounded";
export const BrifecaseTickRoundedMetadata = { 
  id: "brifecase-tick_rounded", 
  baseId: "brifecase-tick", 
  variant: "rounded", 
  name: "Brifecase Tick", 
  category: "education", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BrifecaseTickRounded;
