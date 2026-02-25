/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Columns3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Columns3Filled = React.forwardRef<SVGSVGElement, Columns3FilledProps>(
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
      <path d="M4 2h2a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-2a2 2 0 0 1 -2 -2v-16a2 2 0 0 1 2 -2" />
  <path d="M9 3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
  <path d="M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1" />
    </svg>
  )
);
Columns3Filled.displayName = "Columns3Filled";
export const Columns3FilledMetadata = { 
  id: "columns-3_filled", 
  baseId: "columns-3", 
  variant: "filled", 
  name: "Columns 3", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Columns3Filled;
