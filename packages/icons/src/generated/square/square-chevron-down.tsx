/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareChevronDown = React.forwardRef<SVGSVGElement, SquareChevronDownProps>(
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
  <path d="m16 10-4 4-4-4" />
    </svg>
  )
);
SquareChevronDown.displayName = "SquareChevronDown";
export const SquareChevronDownMetadata = { 
  id: "square-chevron-down", 
  baseId: "square-chevron-down", 
  variant: "default", 
  name: "Square Chevron Down", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareChevronDown;
