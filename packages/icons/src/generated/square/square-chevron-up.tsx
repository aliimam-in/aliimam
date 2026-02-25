/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareChevronUp = React.forwardRef<SVGSVGElement, SquareChevronUpProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m8 14 4-4 4 4" />
    </svg>
  )
);
SquareChevronUp.displayName = "SquareChevronUp";
export const SquareChevronUpMetadata = { 
  id: "square-chevron-up", 
  baseId: "square-chevron-up", 
  variant: "default", 
  name: "Square Chevron Up", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareChevronUp;
