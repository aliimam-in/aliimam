/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeft3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeft3Filled = React.forwardRef<SVGSVGElement, ArrowLeft3FilledProps>(
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
      <path d="M13.98 5.31999L10.77 8.52999L8.79999 10.49C7.96999 11.32 7.96999 12.67 8.79999 13.5L13.98 18.68C14.66 19.36 15.82 18.87 15.82 17.92V12.31V6.07999C15.82 5.11999 14.66 4.63999 13.98 5.31999Z" fill="currentColor"/>
    </svg>
  )
);
ArrowLeft3Filled.displayName = "ArrowLeft3Filled";
export const ArrowLeft3FilledMetadata = { 
  id: "arrow-left-3_filled", 
  baseId: "arrow-left-3", 
  variant: "filled", 
  name: "Arrow Left 3", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeft3Filled;
