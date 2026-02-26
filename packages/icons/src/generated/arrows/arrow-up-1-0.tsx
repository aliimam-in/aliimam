/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUp10Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUp10 = React.forwardRef<SVGSVGElement, ArrowUp10Props>(
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
      <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
  <path d="M17 10V4h-2" />
  <path d="M15 10h4" />
  <rect x="15" y="14" width="4" height="6" ry="2" />
    </svg>
  )
);
ArrowUp10.displayName = "ArrowUp10";
export const ArrowUp10Metadata = { 
  id: "arrow-up-1-0", 
  baseId: "arrow-up-1-0", 
  variant: "default", 
  name: "Arrow Up 1 0", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUp10;
