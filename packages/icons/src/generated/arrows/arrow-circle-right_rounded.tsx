/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowCircleRightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowCircleRightRounded = React.forwardRef<SVGSVGElement, ArrowCircleRightRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.74 15.53L14.26 12L10.74 8.47"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowCircleRightRounded.displayName = "ArrowCircleRightRounded";
export const ArrowCircleRightRoundedMetadata = { 
  id: "arrow-circle-right_rounded", 
  baseId: "arrow-circle-right", 
  variant: "rounded", 
  name: "Arrow Circle Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowCircleRightRounded;
