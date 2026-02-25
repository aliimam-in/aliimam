/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Ironing3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ironing3Filled = React.forwardRef<SVGSVGElement, Ironing3FilledProps>(
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
      <path d="M16.459 5a4 4 0 0 1 3.945 3.343l1.387 8.329a2 2 0 0 1 -1.971 2.328h-16.82a1 1 0 0 1 -1 -1a8 8 0 0 1 8 -8h8.652l-.22 -1.329a2 2 0 0 0 -1.811 -1.665l-.162 -.006h-7.459a1 1 0 1 1 0 -2zm-4.449 9h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-3 0h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m6 0h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2" />
    </svg>
  )
);
Ironing3Filled.displayName = "Ironing3Filled";
export const Ironing3FilledMetadata = { 
  id: "ironing-3_filled", 
  baseId: "ironing-3", 
  variant: "filled", 
  name: "Ironing 3", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Ironing3Filled;
