/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid5FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid5Filled = React.forwardRef<SVGSVGElement, Grid5FilledProps>(
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
      <path d="M8.25 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H8.25Z" fill="currentColor"/>
<path d="M22 7.81V11.25H9.75V2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
<path d="M22 12.75V16.19C22 19.83 19.83 22 16.19 22H9.75V12.75H22Z" fill="currentColor"/>
    </svg>
  )
);
Grid5Filled.displayName = "Grid5Filled";
export const Grid5FilledMetadata = { 
  id: "grid-5_filled", 
  baseId: "grid-5", 
  variant: "filled", 
  name: "Grid 5", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid5Filled;
