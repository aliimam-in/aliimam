/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilterSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FilterSquareRounded = React.forwardRef<SVGSVGElement, FilterSquareRoundedProps>(
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
      <path d="M8.16 6.64999H15.83C16.47 6.64999 16.99 7.16999 16.99 7.80999V9.08999C16.99 9.55999 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.54999 7 9.19999V7.86999C7 7.16999 7.52 6.64999 8.16 6.64999Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FilterSquareRounded.displayName = "FilterSquareRounded";
export const FilterSquareRoundedMetadata = { 
  id: "filter-square_rounded", 
  baseId: "filter-square", 
  variant: "rounded", 
  name: "Filter Square", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FilterSquareRounded;
