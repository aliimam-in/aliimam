/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloseSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloseSquareRounded = React.forwardRef<SVGSVGElement, CloseSquareRoundedProps>(
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
      <path d="M9.17 14.83L14.83 9.17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.83 14.83L9.17 9.17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CloseSquareRounded.displayName = "CloseSquareRounded";
export const CloseSquareRoundedMetadata = { 
  id: "close-square_rounded", 
  baseId: "close-square", 
  variant: "rounded", 
  name: "Close Square", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloseSquareRounded;
