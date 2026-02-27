/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Buildings2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Buildings2Rounded = React.forwardRef<SVGSVGElement, Buildings2RoundedProps>(
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
      <path d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.3699 8.41998V19.58C17.3699 21.19 16.57 22 14.96 22H9.11993C7.50993 22 6.69995 21.19 6.69995 19.58V8.41998C6.69995 6.80998 7.50993 6 9.11993 6H14.96C16.57 6 17.3699 6.80998 17.3699 8.41998Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3999 6V4.15002C13.3999 2.72002 14.1199 2 15.5499 2H19.8499C21.2799 2 21.9999 2.72002 21.9999 4.15002V15.85C21.9999 17.28 21.2799 18 19.8499 18H17.3699"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11H14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14H14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V19"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Buildings2Rounded.displayName = "Buildings2Rounded";
export const Buildings2RoundedMetadata = { 
  id: "buildings-2_rounded", 
  baseId: "buildings-2", 
  variant: "rounded", 
  name: "Buildings 2", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Buildings2Rounded;
