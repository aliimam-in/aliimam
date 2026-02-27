/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DataRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DataRounded = React.forwardRef<SVGSVGElement, DataRoundedProps>(
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
      <path d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12H18"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DataRounded.displayName = "DataRounded";
export const DataRoundedMetadata = { 
  id: "data_rounded", 
  baseId: "data", 
  variant: "rounded", 
  name: "Data", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DataRounded;
