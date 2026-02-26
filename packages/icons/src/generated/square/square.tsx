/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Square = React.forwardRef<SVGSVGElement, SquareProps>(
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
    </svg>
  )
);
Square.displayName = "Square";
export const SquareMetadata = { 
  id: "square", 
  baseId: "square", 
  variant: "default", 
  name: "Square", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Square;
