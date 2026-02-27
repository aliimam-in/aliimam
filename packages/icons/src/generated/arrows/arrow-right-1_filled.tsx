/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRight1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRight1Filled = React.forwardRef<SVGSVGElement, ArrowRight1FilledProps>(
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
      <path d="M6 9.32993V14.6699C6 17.9899 8.35 19.3399 11.22 17.6899L12.5 16.9499C12.81 16.7699 13 16.4399 13 16.0799V7.91993C13 7.55993 12.81 7.22993 12.5 7.04993L11.22 6.30992C8.35 4.65992 6 6.00993 6 9.32993Z" fill="currentColor"/>
<path d="M14 8.79006V15.2201C14 15.6101 14.42 15.8501 14.75 15.6501L15.85 15.0101C18.72 13.3601 18.72 10.6401 15.85 8.99006L14.75 8.35006C14.42 8.16006 14 8.40006 14 8.79006Z" fill="currentColor"/>
    </svg>
  )
);
ArrowRight1Filled.displayName = "ArrowRight1Filled";
export const ArrowRight1FilledMetadata = { 
  id: "arrow-right-1_filled", 
  baseId: "arrow-right-1", 
  variant: "filled", 
  name: "Arrow Right 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRight1Filled;
