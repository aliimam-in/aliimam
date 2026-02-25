/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowUpRight = React.forwardRef<SVGSVGElement, SquareArrowUpRightProps>(
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
  <path d="M8 8h8v8" />
  <path d="m8 16 8-8" />
    </svg>
  )
);
SquareArrowUpRight.displayName = "SquareArrowUpRight";
export const SquareArrowUpRightMetadata = { 
  id: "square-arrow-up-right", 
  baseId: "square-arrow-up-right", 
  variant: "default", 
  name: "Square Arrow Up Right", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowUpRight;
