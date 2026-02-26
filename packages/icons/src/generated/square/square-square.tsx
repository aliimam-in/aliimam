/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareSquare = React.forwardRef<SVGSVGElement, SquareSquareProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
  <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  )
);
SquareSquare.displayName = "SquareSquare";
export const SquareSquareMetadata = { 
  id: "square-square", 
  baseId: "square-square", 
  variant: "default", 
  name: "Square Square", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareSquare;
