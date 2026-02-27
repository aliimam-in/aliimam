/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RefreshSquare2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RefreshSquare2Rounded = React.forwardRef<SVGSVGElement, RefreshSquare2RoundedProps>(
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
<path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RefreshSquare2Rounded.displayName = "RefreshSquare2Rounded";
export const RefreshSquare2RoundedMetadata = { 
  id: "refresh-square-2_rounded", 
  baseId: "refresh-square-2", 
  variant: "rounded", 
  name: "Refresh Square 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RefreshSquare2Rounded;
