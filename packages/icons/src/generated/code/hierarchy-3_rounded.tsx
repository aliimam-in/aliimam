/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Hierarchy3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hierarchy3Rounded = React.forwardRef<SVGSVGElement, Hierarchy3RoundedProps>(
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
      <path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9C17.3431 9 16 10.3431 16 12C16 13.6569 17.3431 15 19 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H9C6.8 12 5 11 5 8V16"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Hierarchy3Rounded.displayName = "Hierarchy3Rounded";
export const Hierarchy3RoundedMetadata = { 
  id: "hierarchy-3_rounded", 
  baseId: "hierarchy-3", 
  variant: "rounded", 
  name: "Hierarchy 3", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Hierarchy3Rounded;
