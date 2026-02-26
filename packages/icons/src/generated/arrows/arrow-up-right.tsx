/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpRight = React.forwardRef<SVGSVGElement, ArrowUpRightProps>(
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
      <path d="M7 7h10v10" />
  <path d="M7 17 17 7" />
    </svg>
  )
);
ArrowUpRight.displayName = "ArrowUpRight";
export const ArrowUpRightMetadata = { 
  id: "arrow-up-right", 
  baseId: "arrow-up-right", 
  variant: "default", 
  name: "Arrow Up Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpRight;
