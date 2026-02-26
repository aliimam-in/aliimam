/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronLastProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronLast = React.forwardRef<SVGSVGElement, ChevronLastProps>(
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
      <path d="m7 18 6-6-6-6" />
  <path d="M17 6v12" />
    </svg>
  )
);
ChevronLast.displayName = "ChevronLast";
export const ChevronLastMetadata = { 
  id: "chevron-last", 
  baseId: "chevron-last", 
  variant: "default", 
  name: "Chevron Last", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronLast;
