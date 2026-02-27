/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScrollRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScrollRounded = React.forwardRef<SVGSVGElement, ScrollRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.6 8.97L7.11 11.46C6.82 11.75 6.82 12.24 7.11 12.53L9.6 15.02"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4 8.97L16.89 11.46C17.18 11.75 17.18 12.24 16.89 12.53L14.4 15.02"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ScrollRounded.displayName = "ScrollRounded";
export const ScrollRoundedMetadata = { 
  id: "scroll_rounded", 
  baseId: "scroll", 
  variant: "rounded", 
  name: "Scroll", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScrollRounded;
