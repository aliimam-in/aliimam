/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDownLeft = React.forwardRef<SVGSVGElement, ArrowDownLeftProps>(
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
      <path d="M17 7 7 17" />
  <path d="M17 17H7V7" />
    </svg>
  )
);
ArrowDownLeft.displayName = "ArrowDownLeft";
export const ArrowDownLeftMetadata = { 
  id: "arrow-down-left", 
  baseId: "arrow-down-left", 
  variant: "default", 
  name: "Arrow Down Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDownLeft;
