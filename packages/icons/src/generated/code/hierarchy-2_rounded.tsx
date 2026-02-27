/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Hierarchy2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hierarchy2Rounded = React.forwardRef<SVGSVGElement, Hierarchy2RoundedProps>(
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
      <path d="M5 15V8"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.25 22C7.04493 22 8.5 20.5449 8.5 18.75C8.5 16.9551 7.04493 15.5 5.25 15.5C3.45507 15.5 2 16.9551 2 18.75C2 20.5449 3.45507 22 5.25 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.13 15C5.58 13.25 7.18 11.95 9.07 11.96L12.5 11.97C15.12 11.98 17.35 10.3 18.17 7.95999"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Hierarchy2Rounded.displayName = "Hierarchy2Rounded";
export const Hierarchy2RoundedMetadata = { 
  id: "hierarchy-2_rounded", 
  baseId: "hierarchy-2", 
  variant: "rounded", 
  name: "Hierarchy 2", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Hierarchy2Rounded;
