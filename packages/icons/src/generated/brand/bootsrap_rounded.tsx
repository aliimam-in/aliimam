/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BootsrapRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BootsrapRounded = React.forwardRef<SVGSVGElement, BootsrapRoundedProps>(
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
      <path d="M17 3H7C5.3 3 4 4.3 4 6V6.8C4 7.6 3.9 8.3 3.6 9.1C3.3 10.2 2.2 11 1 11V13C2.2 13 3.3 13.8 3.6 14.9C3.9 15.6 4 16.4 4 17.2V18C4 19.7 5.3 21 7 21H17C18.7 21 20 19.7 20 18V17.2C20 16.4 20.1 15.7 20.4 14.9C20.8 13.8 21.8 13 23 13V11C21.8 11 20.7 10.2 20.4 9.1C20.1 8.4 20 7.6 20 6.8V6C20 4.3 18.7 3 17 3Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M9.80005 12H12.7C13.9 12 14.8 12.9 14.8 14.1C14.8 15.3 13.9 16.2 12.7 16.2H9.80005V7.79999H12.7C13.9 7.79999 14.8 8.69999 14.8 9.89999C14.8 11.1 13.9 12 12.7 12H9.80005Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BootsrapRounded.displayName = "BootsrapRounded";
export const BootsrapRoundedMetadata = { 
  id: "bootsrap_rounded", 
  baseId: "bootsrap", 
  variant: "rounded", 
  name: "Bootsrap", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BootsrapRounded;
