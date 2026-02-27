/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Export1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Export1Rounded = React.forwardRef<SVGSVGElement, Export1RoundedProps>(
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
      <path d="M9.32007 6.5L11.8801 3.94L14.4401 6.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.8799 14.18V4.01"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Export1Rounded.displayName = "Export1Rounded";
export const Export1RoundedMetadata = { 
  id: "export-1_rounded", 
  baseId: "export-1", 
  variant: "rounded", 
  name: "Export 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Export1Rounded;
