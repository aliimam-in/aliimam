/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilterRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FilterRounded = React.forwardRef<SVGSVGElement, FilterRoundedProps>(
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
      <path d="M5.39999 2.10001H18.6C19.7 2.10001 20.6 3.00001 20.6 4.10001V6.30001C20.6 7.10001 20.1 8.10001 19.6 8.60001L15.3 12.4C14.7 12.9 14.3 13.9 14.3 14.7V19C14.3 19.6 13.9 20.4 13.4 20.7L12 21.6C10.7 22.4 8.89999 21.5 8.89999 19.9V14.6C8.89999 13.9 8.49999 13 8.09999 12.5L4.29999 8.50001C3.79999 8.00001 3.39999 7.10001 3.39999 6.50001V4.20001C3.39999 3.00001 4.29999 2.10001 5.39999 2.10001Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.93 2.10001L6 10"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FilterRounded.displayName = "FilterRounded";
export const FilterRoundedMetadata = { 
  id: "filter_rounded", 
  baseId: "filter", 
  variant: "rounded", 
  name: "Filter", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FilterRounded;
