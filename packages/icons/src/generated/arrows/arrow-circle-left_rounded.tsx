/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowCircleLeftRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowCircleLeftRounded = React.forwardRef<SVGSVGElement, ArrowCircleLeftRoundedProps>(
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
<path d="M13.26 15.53L9.73999 12L13.26 8.47"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowCircleLeftRounded.displayName = "ArrowCircleLeftRounded";
export const ArrowCircleLeftRoundedMetadata = { 
  id: "arrow-circle-left_rounded", 
  baseId: "arrow-circle-left", 
  variant: "rounded", 
  name: "Arrow Circle Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowCircleLeftRounded;
