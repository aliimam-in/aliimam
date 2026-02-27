/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RowHorizontalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RowHorizontalRounded = React.forwardRef<SVGSVGElement, RowHorizontalRoundedProps>(
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
      <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RowHorizontalRounded.displayName = "RowHorizontalRounded";
export const RowHorizontalRoundedMetadata = { 
  id: "row-horizontal_rounded", 
  baseId: "row-horizontal", 
  variant: "rounded", 
  name: "Row Horizontal", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RowHorizontalRounded;
