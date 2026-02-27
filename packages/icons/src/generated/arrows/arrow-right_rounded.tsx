/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRightRounded = React.forwardRef<SVGSVGElement, ArrowRightRoundedProps>(
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
      <path d="M14.4299 5.92999L20.4999 12L14.4299 18.07"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 12H20.33"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowRightRounded.displayName = "ArrowRightRounded";
export const ArrowRightRoundedMetadata = { 
  id: "arrow-right_rounded", 
  baseId: "arrow-right", 
  variant: "rounded", 
  name: "Arrow Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRightRounded;
