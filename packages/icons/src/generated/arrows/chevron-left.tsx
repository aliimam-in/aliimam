/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronLeft = React.forwardRef<SVGSVGElement, ChevronLeftProps>(
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
);
ChevronLeft.displayName = "ChevronLeft";
export const ChevronLeftMetadata = { 
  id: "chevron-left", 
  baseId: "chevron-left", 
  variant: "default", 
  name: "Chevron Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronLeft;
