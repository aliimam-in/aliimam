/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowLeft = React.forwardRef<SVGSVGElement, SquareArrowLeftProps>(
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
  <path d="m12 8-4 4 4 4" />
  <path d="M16 12H8" />
    </svg>
  )
);
SquareArrowLeft.displayName = "SquareArrowLeft";
export const SquareArrowLeftMetadata = { 
  id: "square-arrow-left", 
  baseId: "square-arrow-left", 
  variant: "default", 
  name: "Square Arrow Left", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowLeft;
