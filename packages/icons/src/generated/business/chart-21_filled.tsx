/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Chart21FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Chart21Filled = React.forwardRef<SVGSVGElement, Chart21FilledProps>(
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
      <path d="M22 22H2C1.59 22 1.25 21.66 1.25 21.25C1.25 20.84 1.59 20.5 2 20.5H22C22.41 20.5 22.75 20.84 22.75 21.25C22.75 21.66 22.41 22 22 22Z" fill="currentColor"/>
<path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z" fill="currentColor"/>
<path d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z" fill="currentColor"/>
<path d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" fill="currentColor"/>
    </svg>
  )
);
Chart21Filled.displayName = "Chart21Filled";
export const Chart21FilledMetadata = { 
  id: "chart-21_filled", 
  baseId: "chart-21", 
  variant: "filled", 
  name: "Chart 21", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Chart21Filled;
