/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareCheck = React.forwardRef<SVGSVGElement, SquareCheckProps>(
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
  <path d="m9 12 2 2 4-4" />
    </svg>
  )
);
SquareCheck.displayName = "SquareCheck";
export const SquareCheckMetadata = { 
  id: "square-check", 
  baseId: "square-check", 
  variant: "default", 
  name: "Square Check", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareCheck;
