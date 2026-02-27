/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NextRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NextRounded = React.forwardRef<SVGSVGElement, NextRoundedProps>(
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
      <path d="M3.76001 7.21999V16.79C3.76001 18.75 5.89 19.98 7.59 19L11.74 16.61L15.89 14.21C17.59 13.23 17.59 10.78 15.89 9.79998L11.74 7.39998L7.59 5.01C5.89 4.03 3.76001 5.24999 3.76001 7.21999Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.24 18.18V5.82001"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NextRounded.displayName = "NextRounded";
export const NextRoundedMetadata = { 
  id: "next_rounded", 
  baseId: "next", 
  variant: "rounded", 
  name: "Next", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NextRounded;
