/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowSquareDownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowSquareDownRounded = React.forwardRef<SVGSVGElement, ArrowSquareDownRoundedProps>(
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
<path d="M8.46997 10.64L12 14.16L15.53 10.64" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowSquareDownRounded.displayName = "ArrowSquareDownRounded";
export const ArrowSquareDownRoundedMetadata = { 
  id: "arrow-square-down_rounded", 
  baseId: "arrow-square-down", 
  variant: "rounded", 
  name: "Arrow Square Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowSquareDownRounded;
