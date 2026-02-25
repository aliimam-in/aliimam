/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeftRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeftRight = React.forwardRef<SVGSVGElement, ArrowLeftRightProps>(
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
      <path d="M8 3 4 7l4 4" />
  <path d="M4 7h16" />
  <path d="m16 21 4-4-4-4" />
  <path d="M20 17H4" />
    </svg>
  )
);
ArrowLeftRight.displayName = "ArrowLeftRight";
export const ArrowLeftRightMetadata = { 
  id: "arrow-left-right", 
  baseId: "arrow-left-right", 
  variant: "default", 
  name: "Arrow Left Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeftRight;
