/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RefreshLeftSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RefreshLeftSquareRounded = React.forwardRef<SVGSVGElement, RefreshLeftSquareRoundedProps>(
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
      <path d="M10.33 7.51C10.83 7.36 11.38 7.26 12 7.26C14.76 7.26 17 9.5 17 12.26C17 15.02 14.76 17.26 12 17.26C9.24 17.26 7 15.02 7 12.26C7 11.23 7.31 10.28 7.84 9.48" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.62012 7.65L11.2801 5.74" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.62012 7.65L11.5601 9.07" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RefreshLeftSquareRounded.displayName = "RefreshLeftSquareRounded";
export const RefreshLeftSquareRoundedMetadata = { 
  id: "refresh-left-square_rounded", 
  baseId: "refresh-left-square", 
  variant: "rounded", 
  name: "Refresh Left Square", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RefreshLeftSquareRounded;
