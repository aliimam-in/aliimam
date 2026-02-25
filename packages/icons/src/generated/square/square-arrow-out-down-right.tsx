/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowOutDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowOutDownRight = React.forwardRef<SVGSVGElement, SquareArrowOutDownRightProps>(
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
      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
  <path d="m21 21-9-9" />
  <path d="M21 15v6h-6" />
    </svg>
  )
);
SquareArrowOutDownRight.displayName = "SquareArrowOutDownRight";
export const SquareArrowOutDownRightMetadata = { 
  id: "square-arrow-out-down-right", 
  baseId: "square-arrow-out-down-right", 
  variant: "default", 
  name: "Square Arrow Out Down Right", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowOutDownRight;
