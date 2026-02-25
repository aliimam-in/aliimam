/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsDownUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsDownUp = React.forwardRef<SVGSVGElement, ChevronsDownUpProps>(
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
      <path d="m7 20 5-5 5 5" />
  <path d="m7 4 5 5 5-5" />
    </svg>
  )
);
ChevronsDownUp.displayName = "ChevronsDownUp";
export const ChevronsDownUpMetadata = { 
  id: "chevrons-down-up", 
  baseId: "chevrons-down-up", 
  variant: "default", 
  name: "Chevrons Down Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronsDownUp;
