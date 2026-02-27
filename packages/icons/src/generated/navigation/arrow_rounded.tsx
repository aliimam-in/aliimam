/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRounded = React.forwardRef<SVGSVGElement, ArrowRoundedProps>(
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
      <path d="M12 22V20"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V16"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V11C12 7.13 15.13 4 19 4H22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 4H5C8.87 4 12 7.13 12 11V12V14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 2L2 4L4 6"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 2L22 4L20 6"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowRounded.displayName = "ArrowRounded";
export const ArrowRoundedMetadata = { 
  id: "arrow_rounded", 
  baseId: "arrow", 
  variant: "rounded", 
  name: "Arrow", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRounded;
