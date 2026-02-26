/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowDown = React.forwardRef<SVGSVGElement, SquareArrowDownProps>(
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
  <path d="M12 8v8" />
  <path d="m8 12 4 4 4-4" />
    </svg>
  )
);
SquareArrowDown.displayName = "SquareArrowDown";
export const SquareArrowDownMetadata = { 
  id: "square-arrow-down", 
  baseId: "square-arrow-down", 
  variant: "default", 
  name: "Square Arrow Down", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowDown;
