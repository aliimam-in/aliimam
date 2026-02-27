/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RowVerticalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RowVerticalRounded = React.forwardRef<SVGSVGElement, RowVerticalRoundedProps>(
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
      <path d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RowVerticalRounded.displayName = "RowVerticalRounded";
export const RowVerticalRoundedMetadata = { 
  id: "row-vertical_rounded", 
  baseId: "row-vertical", 
  variant: "rounded", 
  name: "Row Vertical", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RowVerticalRounded;
