/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BedFlatFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BedFlatFilled = React.forwardRef<SVGSVGElement, BedFlatFilledProps>(
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
      <path d="M5 8a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
  <path d="M18 7a4 4 0 0 1 4 4v2a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" />
  <path d="M21 15a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z" />
    </svg>
  )
);
BedFlatFilled.displayName = "BedFlatFilled";
export const BedFlatFilledMetadata = { 
  id: "bed-flat_filled", 
  baseId: "bed-flat", 
  variant: "filled", 
  name: "Bed Flat", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BedFlatFilled;
