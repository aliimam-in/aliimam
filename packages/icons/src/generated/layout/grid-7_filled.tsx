/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid7FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid7Filled = React.forwardRef<SVGSVGElement, Grid7FilledProps>(
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
      <path d="M11.25 10.5V22H7.81C4.17 22 2 19.83 2 16.19V10.5H11.25Z" fill="currentColor"/>
<path d="M22 10.5V16.19C22 19.83 19.83 22 16.19 22H12.75V10.5H22Z" fill="currentColor"/>
<path d="M22 7.81V9H2V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
    </svg>
  )
);
Grid7Filled.displayName = "Grid7Filled";
export const Grid7FilledMetadata = { 
  id: "grid-7_filled", 
  baseId: "grid-7", 
  variant: "filled", 
  name: "Grid 7", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid7Filled;
