/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareMinus = React.forwardRef<SVGSVGElement, SquareMinusProps>(
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
  <path d="M8 12h8" />
    </svg>
  )
);
SquareMinus.displayName = "SquareMinus";
export const SquareMinusMetadata = { 
  id: "square-minus", 
  baseId: "square-minus", 
  variant: "default", 
  name: "Square Minus", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareMinus;
