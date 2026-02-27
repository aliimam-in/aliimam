/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BackSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BackSquareRounded = React.forwardRef<SVGSVGElement, BackSquareRoundedProps>(
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
<path d="M8.9999 15.38H13.9199C15.6199 15.38 16.9999 14 16.9999 12.3C16.9999 10.6 15.6199 9.22 13.9199 9.22H7.1499"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.57 10.77L7 9.19L8.57 7.62"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BackSquareRounded.displayName = "BackSquareRounded";
export const BackSquareRoundedMetadata = { 
  id: "back-square_rounded", 
  baseId: "back-square", 
  variant: "rounded", 
  name: "Back Square", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BackSquareRounded;
