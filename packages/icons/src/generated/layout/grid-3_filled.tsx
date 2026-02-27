/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid3Filled = React.forwardRef<SVGSVGElement, Grid3FilledProps>(
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
      <path d="M16.19 2H12.75V8V8.75V13.75H22V8.75V8V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor"/>
<path d="M2 10.25V15.25V15.75V16.19C2 19.83 4.17 22 7.81 22H11.25V15.75V15.25V10.25H2Z" fill="currentColor"/>
<path d="M11.25 2V8.75H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill="currentColor"/>
<path d="M22 15.25V16.19C22 19.83 19.83 22 16.19 22H12.75V15.25H22Z" fill="currentColor"/>
    </svg>
  )
);
Grid3Filled.displayName = "Grid3Filled";
export const Grid3FilledMetadata = { 
  id: "grid-3_filled", 
  baseId: "grid-3", 
  variant: "filled", 
  name: "Grid 3", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid3Filled;
