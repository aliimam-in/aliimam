/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid6FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid6Filled = React.forwardRef<SVGSVGElement, Grid6FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M22 7.74995H9.75V1.94995H16.19C19.83 1.94995 22 4.11995 22 7.74995Z" fill="currentColor"/>
<path d="M22 16.25C21.95 19.82 19.79 21.95 16.19 21.95H9.75V16.25H22Z" fill="currentColor"/>
<path d="M8.25 1.94995V21.95H7.81C4.17 21.95 2 19.78 2 16.14V7.75995C2 4.11995 4.17 1.94995 7.81 1.94995H8.25Z" fill="currentColor"/>
<path d="M22 9.25H9.75V14.75H22V9.25Z" fill="currentColor"/>
    </svg>
  )
);
Grid6Filled.displayName = "Grid6Filled";
export const Grid6FilledMetadata = { 
  id: "grid-6_filled", 
  baseId: "grid-6", 
  variant: "filled", 
  name: "Grid 6", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid6Filled;
