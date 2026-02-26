/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpLeft = React.forwardRef<SVGSVGElement, ArrowUpLeftProps>(
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
      <path d="M7 17V7h10" />
  <path d="M17 17 7 7" />
    </svg>
  )
);
ArrowUpLeft.displayName = "ArrowUpLeft";
export const ArrowUpLeftMetadata = { 
  id: "arrow-up-left", 
  baseId: "arrow-up-left", 
  variant: "default", 
  name: "Arrow Up Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpLeft;
