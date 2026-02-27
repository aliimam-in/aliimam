/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUp2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUp2Filled = React.forwardRef<SVGSVGElement, ArrowUp2FilledProps>(
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
      <path d="M9.32993 18H14.6699C17.9899 18 19.3399 15.65 17.6899 12.78L16.9499 11.5C16.7699 11.19 16.4399 11 16.0799 11H7.91993C7.55993 11 7.22993 11.19 7.04993 11.5L6.30992 12.78C4.65992 15.65 6.00993 18 9.32993 18Z" fill="currentColor"/>
<path d="M8.79006 10.0001H15.2201C15.6101 10.0001 15.8501 9.58006 15.6501 9.25006L15.0101 8.15006C13.3601 5.28006 10.6401 5.28006 8.99006 8.15006L8.35006 9.25006C8.16006 9.58006 8.40006 10.0001 8.79006 10.0001Z" fill="currentColor"/>
    </svg>
  )
);
ArrowUp2Filled.displayName = "ArrowUp2Filled";
export const ArrowUp2FilledMetadata = { 
  id: "arrow-up-2_filled", 
  baseId: "arrow-up-2", 
  variant: "filled", 
  name: "Arrow Up 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUp2Filled;
