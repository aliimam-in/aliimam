/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Maximize2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Maximize2Rounded = React.forwardRef<SVGSVGElement, Maximize2RoundedProps>(
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
      <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Maximize2Rounded.displayName = "Maximize2Rounded";
export const Maximize2RoundedMetadata = { 
  id: "maximize-2_rounded", 
  baseId: "maximize-2", 
  variant: "rounded", 
  name: "Maximize 2", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Maximize2Rounded;
