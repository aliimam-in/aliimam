/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid1Filled = React.forwardRef<SVGSVGElement, Grid1FilledProps>(
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
      <path d="M7.75 2V7.8H2C2 4.19 4.15 2.02 7.75 2Z" fill="currentColor"/>
<path d="M22 7.8H16.25V2C19.85 2.02 22 4.19 22 7.8Z" fill="currentColor"/>
<path d="M22 16.3C21.96 19.85 19.82 21.98 16.25 22V16.3H22Z" fill="currentColor"/>
<path d="M7.75 16.3V22C4.18 21.98 2.04 19.85 2 16.3H7.75Z" fill="currentColor"/>
<path d="M7.75 9.30005H2V14.8H7.75V9.30005Z" fill="currentColor"/>
<path d="M22 9.30005H16.25V14.8H22V9.30005Z" fill="currentColor"/>
<path d="M14.75 9.30005H9.25V14.8H14.75V9.30005Z" fill="currentColor"/>
<path d="M14.75 2H9.25V7.8H14.75V2Z" fill="currentColor"/>
<path d="M14.75 16.3H9.25V22H14.75V16.3Z" fill="currentColor"/>
    </svg>
  )
);
Grid1Filled.displayName = "Grid1Filled";
export const Grid1FilledMetadata = { 
  id: "grid-1_filled", 
  baseId: "grid-1", 
  variant: "filled", 
  name: "Grid 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid1Filled;
