/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid7RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid7Rounded = React.forwardRef<SVGSVGElement, Grid7RoundedProps>(
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
<path d="M22 10H2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Grid7Rounded.displayName = "Grid7Rounded";
export const Grid7RoundedMetadata = { 
  id: "grid-7_rounded", 
  baseId: "grid-7", 
  variant: "rounded", 
  name: "Grid 7", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid7Rounded;
