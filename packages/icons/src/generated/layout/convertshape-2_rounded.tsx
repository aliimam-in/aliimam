/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Convertshape2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Convertshape2Rounded = React.forwardRef<SVGSVGElement, Convertshape2RoundedProps>(
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
      <path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Convertshape2Rounded.displayName = "Convertshape2Rounded";
export const Convertshape2RoundedMetadata = { 
  id: "convertshape-2_rounded", 
  baseId: "convertshape-2", 
  variant: "rounded", 
  name: "Convertshape 2", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Convertshape2Rounded;
