/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronUp = React.forwardRef<SVGSVGElement, ChevronUpProps>(
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
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
);
ChevronUp.displayName = "ChevronUp";
export const ChevronUpMetadata = { 
  id: "chevron-up", 
  baseId: "chevron-up", 
  variant: "default", 
  name: "Chevron Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronUp;
