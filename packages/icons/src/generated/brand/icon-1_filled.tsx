/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Icon1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Icon1Filled = React.forwardRef<SVGSVGElement, Icon1FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16.19 2H7.82002C4.18002 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18002 21.99 7.82002 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2ZM11 7.5C11 7.78 10.78 8 10.5 8H9.00002C8.45002 8 8.00002 8.45 8.00002 9V10.5C8.00002 10.78 7.78002 11 7.50002 11H5.50002C5.22002 11 5.00002 10.78 5.00002 10.5V9C5.00002 6.79 6.79002 5 9.00002 5H10.5C10.78 5 11 5.22 11 5.5V7.5ZM19 15C19 17.21 17.21 19 15 19H13.5C13.22 19 13 18.78 13 18.5V16.5C13 16.22 13.22 16 13.5 16H15C15.55 16 16 15.55 16 15V13.5C16 13.22 16.22 13 16.5 13H18.5C18.78 13 19 13.22 19 13.5V15Z" fill="currentColor"/>
    </svg>
  )
);
Icon1Filled.displayName = "Icon1Filled";
export const Icon1FilledMetadata = { 
  id: "icon-1_filled", 
  baseId: "icon-1", 
  variant: "filled", 
  name: "Icon 1", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Icon1Filled;
