/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid6RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid6Rounded = React.forwardRef<SVGSVGElement, Grid6RoundedProps>(
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
<path d="M10 2V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8.5H22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.5H22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Grid6Rounded.displayName = "Grid6Rounded";
export const Grid6RoundedMetadata = { 
  id: "grid-6_rounded", 
  baseId: "grid-6", 
  variant: "rounded", 
  name: "Grid 6", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid6Rounded;
