/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Crown1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crown1Filled = React.forwardRef<SVGSVGElement, Crown1FilledProps>(
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
      <path d="M22 5.71V15.29C22 18.05 19.76 20.29 17 20.29H7C6.54 20.29 6.1 20.23 5.67 20.11C5.05 19.94 4.85 19.15 5.31 18.69L15.94 8.06C16.16 7.84 16.49 7.79 16.8 7.85C17.12 7.91 17.47 7.82 17.72 7.58L20.29 5C21.23 4.06 22 4.37 22 5.71Z" fill="currentColor"/>
<path d="M14.64 7.36002L4.17 17.83C3.69 18.31 2.89 18.19 2.57 17.59C2.2 16.91 2 16.12 2 15.29V5.71002C2 4.37002 2.77 4.06002 3.71 5.00002L6.29 7.59002C6.68 7.97002 7.32 7.97002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.71 4.00002L14.65 5.94002C15.03 6.33002 15.03 6.97002 14.64 7.36002Z" fill="currentColor"/>
    </svg>
  )
);
Crown1Filled.displayName = "Crown1Filled";
export const Crown1FilledMetadata = { 
  id: "crown-1_filled", 
  baseId: "crown-1", 
  variant: "filled", 
  name: "Crown 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Crown1Filled;
