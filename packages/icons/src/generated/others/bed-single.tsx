/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BedSingleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BedSingle = React.forwardRef<SVGSVGElement, BedSingleProps>(
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
      <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
  <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
  <path d="M3 18h18" />
    </svg>
  )
);
BedSingle.displayName = "BedSingle";
export const BedSingleMetadata = { 
  id: "bed-single", 
  baseId: "bed-single", 
  variant: "default", 
  name: "Bed Single", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BedSingle;
