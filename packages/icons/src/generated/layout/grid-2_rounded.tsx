/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid2Rounded = React.forwardRef<SVGSVGElement, Grid2RoundedProps>(
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
<path d="M12 2V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Grid2Rounded.displayName = "Grid2Rounded";
export const Grid2RoundedMetadata = { 
  id: "grid-2_rounded", 
  baseId: "grid-2", 
  variant: "rounded", 
  name: "Grid 2", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid2Rounded;
