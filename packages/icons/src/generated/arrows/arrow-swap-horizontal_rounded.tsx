/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowSwapHorizontalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowSwapHorizontalRounded = React.forwardRef<SVGSVGElement, ArrowSwapHorizontalRoundedProps>(
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
      <path d="M20.5 14.99L15.49 20.01" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 14.99H20.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 9.01001L8.51 3.99001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9.00999H3.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowSwapHorizontalRounded.displayName = "ArrowSwapHorizontalRounded";
export const ArrowSwapHorizontalRoundedMetadata = { 
  id: "arrow-swap-horizontal_rounded", 
  baseId: "arrow-swap-horizontal", 
  variant: "rounded", 
  name: "Arrow Swap Horizontal", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowSwapHorizontalRounded;
