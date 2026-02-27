/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowSquareRightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowSquareRightRounded = React.forwardRef<SVGSVGElement, ArrowSquareRightRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.74 15.53L14.26 12L10.74 8.47" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowSquareRightRounded.displayName = "ArrowSquareRightRounded";
export const ArrowSquareRightRoundedMetadata = { 
  id: "arrow-square-right_rounded", 
  baseId: "arrow-square-right", 
  variant: "rounded", 
  name: "Arrow Square Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowSquareRightRounded;
