/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PolyswarmNctRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PolyswarmNctRounded = React.forwardRef<SVGSVGElement, PolyswarmNctRoundedProps>(
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
      <path d="M9.5 3.20001H14.5C18.3 3.20001 21.5 6.30001 21.5 10.2C21.5 14 18.4 17.2 14.5 17.2H3.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.19995 6.79999H13.8C15.8 6.79999 17.5 8.49999 17.5 10.5C17.5 12.5 15.8 14.2 13.8 14.2H7.99995"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 10.8H5.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 20.8H2.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PolyswarmNctRounded.displayName = "PolyswarmNctRounded";
export const PolyswarmNctRoundedMetadata = { 
  id: "polyswarm-nct_rounded", 
  baseId: "polyswarm-nct", 
  variant: "rounded", 
  name: "Polyswarm Nct", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PolyswarmNctRounded;
