/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid1Rounded = React.forwardRef<SVGSVGElement, Grid1RoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.03003 8.5H22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.03003 15.5H22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.51001 21.99V2.01001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.51 21.99V2.01001"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Grid1Rounded.displayName = "Grid1Rounded";
export const Grid1RoundedMetadata = { 
  id: "grid-1_rounded", 
  baseId: "grid-1", 
  variant: "rounded", 
  name: "Grid 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid1Rounded;
