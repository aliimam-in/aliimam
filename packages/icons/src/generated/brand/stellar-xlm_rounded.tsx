/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StellarXlmRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StellarXlmRounded = React.forwardRef<SVGSVGElement, StellarXlmRoundedProps>(
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
      <path d="M16.4 4.99999C15.1 4.19999 13.6 3.79999 12 3.79999C7.40005 3.79999 3.80005 7.49999 3.80005 12C3.80005 12.8 3.90005 13.5 4.10005 14.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.6001 19C8.9001 19.8 10.4001 20.3 12.0001 20.3C16.6001 20.3 20.2001 16.6 20.2001 12.1C20.2001 11.3 20.1001 10.5 19.9001 9.70001"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 16L22 5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8.5L2 19.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
StellarXlmRounded.displayName = "StellarXlmRounded";
export const StellarXlmRoundedMetadata = { 
  id: "stellar-xlm_rounded", 
  baseId: "stellar-xlm", 
  variant: "rounded", 
  name: "Stellar Xlm", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StellarXlmRounded;
