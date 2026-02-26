/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpFromDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpFromDot = React.forwardRef<SVGSVGElement, ArrowUpFromDotProps>(
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
      <path d="m5 9 7-7 7 7" />
  <path d="M12 16V2" />
  <circle cx="12" cy="21" r="1" />
    </svg>
  )
);
ArrowUpFromDot.displayName = "ArrowUpFromDot";
export const ArrowUpFromDotMetadata = { 
  id: "arrow-up-from-dot", 
  baseId: "arrow-up-from-dot", 
  variant: "default", 
  name: "Arrow Up From Dot", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpFromDot;
