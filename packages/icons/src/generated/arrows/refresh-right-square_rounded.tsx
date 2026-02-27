/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RefreshRightSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RefreshRightSquareRounded = React.forwardRef<SVGSVGElement, RefreshRightSquareRoundedProps>(
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
<path d="M13.67 7.51C13.17 7.36 12.62 7.26 12 7.26C9.24 7.26 7 9.5 7 12.26C7 15.02 9.24 17.26 12 17.26C14.76 17.26 17 15.02 17 12.26C17 11.23 16.69 10.28 16.16 9.48"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.38 7.65L12.72 5.74"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.3799 7.65L12.4399 9.07"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RefreshRightSquareRounded.displayName = "RefreshRightSquareRounded";
export const RefreshRightSquareRoundedMetadata = { 
  id: "refresh-right-square_rounded", 
  baseId: "refresh-right-square", 
  variant: "rounded", 
  name: "Refresh Right Square", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RefreshRightSquareRounded;
