/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowCircleDownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowCircleDownRounded = React.forwardRef<SVGSVGElement, ArrowCircleDownRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowCircleDownRounded.displayName = "ArrowCircleDownRounded";
export const ArrowCircleDownRoundedMetadata = { 
  id: "arrow-circle-down_rounded", 
  baseId: "arrow-circle-down", 
  variant: "rounded", 
  name: "Arrow Circle Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowCircleDownRounded;
