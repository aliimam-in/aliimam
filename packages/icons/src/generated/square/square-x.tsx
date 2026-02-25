/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareX = React.forwardRef<SVGSVGElement, SquareXProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
    </svg>
  )
);
SquareX.displayName = "SquareX";
export const SquareXMetadata = { 
  id: "square-x", 
  baseId: "square-x", 
  variant: "default", 
  name: "Square X", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareX;
