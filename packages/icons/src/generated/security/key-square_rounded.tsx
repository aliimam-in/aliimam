/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeySquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KeySquareRounded = React.forwardRef<SVGSVGElement, KeySquareRoundedProps>(
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
<path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.50995 17.22C9.32995 17.41 8.95995 17.53 8.68995 17.49L7.48995 17.33C7.08995 17.28 6.72995 16.9 6.66995 16.51L6.50995 15.31C6.46995 15.05 6.59995 14.68 6.77995 14.49L9.35995 11.91C8.91995 10.48 9.25995 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.45 16.28L9.59998 15.42"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3945 10.7H13.4035"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
KeySquareRounded.displayName = "KeySquareRounded";
export const KeySquareRoundedMetadata = { 
  id: "key-square_rounded", 
  baseId: "key-square", 
  variant: "rounded", 
  name: "Key Square", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default KeySquareRounded;
