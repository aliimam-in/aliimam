/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid3x3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid3x3 = React.forwardRef<SVGSVGElement, Grid3x3Props>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M3 15h18" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
    </svg>
  )
);
Grid3x3.displayName = "Grid3x3";
export const Grid3x3Metadata = { 
  id: "grid-3x3", 
  baseId: "grid-3x3", 
  variant: "default", 
  name: "Grid 3x3", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grid3x3;
