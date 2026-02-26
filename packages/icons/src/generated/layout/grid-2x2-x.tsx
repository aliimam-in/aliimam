/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid2x2XProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid2x2X = React.forwardRef<SVGSVGElement, Grid2x2XProps>(
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
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
  <path d="m16 16 5 5" />
  <path d="m16 21 5-5" />
    </svg>
  )
);
Grid2x2X.displayName = "Grid2x2X";
export const Grid2x2XMetadata = { 
  id: "grid-2x2-x", 
  baseId: "grid-2x2-x", 
  variant: "default", 
  name: "Grid 2x2 X", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid2x2X;
