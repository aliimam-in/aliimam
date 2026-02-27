/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUp3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUp3Filled = React.forwardRef<SVGSVGElement, ArrowUp3FilledProps>(
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
      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.82 10.82C16.53 11.11 16.05 11.11 15.76 10.82L12.75 7.81V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V7.81L8.24 10.82C7.95 11.11 7.47 11.11 7.18 10.82C7.03 10.67 6.96 10.48 6.96 10.29C6.96 10.1 7.04 9.9 7.18 9.76L11.47 5.47C11.61 5.33 11.8 5.25 12 5.25C12.2 5.25 12.39 5.33 12.53 5.47L16.82 9.76C17.11 10.05 17.11 10.52 16.82 10.82Z" fill="currentColor"/>
    </svg>
  )
);
ArrowUp3Filled.displayName = "ArrowUp3Filled";
export const ArrowUp3FilledMetadata = { 
  id: "arrow-up-3_filled", 
  baseId: "arrow-up-3", 
  variant: "filled", 
  name: "Arrow Up 3", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUp3Filled;
