/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid2Filled = React.forwardRef<SVGSVGElement, Grid2FilledProps>(
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
      <path d="M11.25 12.75V22H7.81C4.17 22 2 19.83 2 16.19V12.75H11.25Z" fill="currentColor"/>
<path d="M22 7.81V11.25H12.75V2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
<path d="M11.25 2V11.25H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill="currentColor"/>
<path d="M22 12.75V16.19C22 19.83 19.83 22 16.19 22H12.75V12.75H22Z" fill="currentColor"/>
    </svg>
  )
);
Grid2Filled.displayName = "Grid2Filled";
export const Grid2FilledMetadata = { 
  id: "grid-2_filled", 
  baseId: "grid-2", 
  variant: "filled", 
  name: "Grid 2", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid2Filled;
