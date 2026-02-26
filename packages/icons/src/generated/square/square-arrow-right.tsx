/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowRight = React.forwardRef<SVGSVGElement, SquareArrowRightProps>(
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
  <path d="m12 16 4-4-4-4" />
    </svg>
  )
);
SquareArrowRight.displayName = "SquareArrowRight";
export const SquareArrowRightMetadata = { 
  id: "square-arrow-right", 
  baseId: "square-arrow-right", 
  variant: "default", 
  name: "Square Arrow Right", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowRight;
