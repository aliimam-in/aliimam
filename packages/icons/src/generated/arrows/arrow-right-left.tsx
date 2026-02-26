/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRightLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRightLeft = React.forwardRef<SVGSVGElement, ArrowRightLeftProps>(
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
      <path d="m16 3 4 4-4 4" />
  <path d="M20 7H4" />
  <path d="m8 21-4-4 4-4" />
  <path d="M4 17h16" />
    </svg>
  )
);
ArrowRightLeft.displayName = "ArrowRightLeft";
export const ArrowRightLeftMetadata = { 
  id: "arrow-right-left", 
  baseId: "arrow-right-left", 
  variant: "default", 
  name: "Arrow Right Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRightLeft;
