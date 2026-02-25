/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Columns1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Columns1Filled = React.forwardRef<SVGSVGElement, Columns1FilledProps>(
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
      <path d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-16a2 2 0 0 1 2 -2z" />
    </svg>
  )
);
Columns1Filled.displayName = "Columns1Filled";
export const Columns1FilledMetadata = { 
  id: "columns-1_filled", 
  baseId: "columns-1", 
  variant: "filled", 
  name: "Columns 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Columns1Filled;
