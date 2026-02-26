/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowUp = React.forwardRef<SVGSVGElement, SquareArrowUpProps>(
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
  <path d="m16 12-4-4-4 4" />
  <path d="M12 16V8" />
    </svg>
  )
);
SquareArrowUp.displayName = "SquareArrowUp";
export const SquareArrowUpMetadata = { 
  id: "square-arrow-up", 
  baseId: "square-arrow-up", 
  variant: "default", 
  name: "Square Arrow Up", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowUp;
