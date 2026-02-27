/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeftRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeftRounded = React.forwardRef<SVGSVGElement, ArrowLeftRoundedProps>(
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
      <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.4999 12H3.66992" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowLeftRounded.displayName = "ArrowLeftRounded";
export const ArrowLeftRoundedMetadata = { 
  id: "arrow-left_rounded", 
  baseId: "arrow-left", 
  variant: "rounded", 
  name: "Arrow Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeftRounded;
