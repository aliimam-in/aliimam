/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CivicCvcRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CivicCvcRounded = React.forwardRef<SVGSVGElement, CivicCvcRoundedProps>(
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
      <path d="M14.3 10.1C14.6 11.2 14.1 12.2 13.3 12.7V14.7C13.3 15.4 12.7 15.9 12.1 15.9C11.4 15.9 10.9 15.3 10.9 14.7V12.7C10.2 12.3 9.80005 11.5 9.80005 10.7C9.80005 9.20002 11.2 8.00002 12.8 8.40002C13.4 8.70002 14.1 9.30002 14.3 10.1Z"   strokeMiterlimit="10"/>
<path d="M21.6 9C20.3 5 16.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C16.5 22 20.3 19.1 21.5 15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CivicCvcRounded.displayName = "CivicCvcRounded";
export const CivicCvcRoundedMetadata = { 
  id: "civic-cvc_rounded", 
  baseId: "civic-cvc", 
  variant: "rounded", 
  name: "Civic Cvc", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CivicCvcRounded;
