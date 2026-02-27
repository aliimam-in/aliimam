/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SortRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SortRounded = React.forwardRef<SVGSVGElement, SortRoundedProps>(
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
      <path d="M3 7H21"   strokeLinecap="round"/>
<path d="M6 12H18"   strokeLinecap="round"/>
<path d="M10 17H14"   strokeLinecap="round"/>
    </svg>
  )
);
SortRounded.displayName = "SortRounded";
export const SortRoundedMetadata = { 
  id: "sort_rounded", 
  baseId: "sort", 
  variant: "rounded", 
  name: "Sort", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SortRounded;
