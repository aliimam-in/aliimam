/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilterTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FilterTickRounded = React.forwardRef<SVGSVGElement, FilterTickRoundedProps>(
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
      <path d="M21.63 14.75C21.63 15.64 21.39 16.48 20.95 17.2C20.13 18.57 18.62 19.5 16.88 19.5C15.94 19.5 15.06 19.22 14.32 18.73C13.7 18.35 13.19 17.82 12.82 17.2C12.38 16.48 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C17.24 10 17.59 10.04 17.92 10.12C20.05 10.59 21.63 12.49 21.63 14.75Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.03 14.75L16.2 15.92L18.73 13.58"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.69 4.01999V6.23999C20.69 7.04999 20.18 8.06001 19.68 8.57001L17.92 10.12C17.59 10.04 17.24 10 16.88 10C14.26 10 12.13 12.13 12.13 14.75C12.13 15.64 12.38 16.48 12.82 17.2C13.19 17.82 13.7 18.35 14.32 18.73V19.07C14.32 19.68 13.92 20.49 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.46 13.01 8.06 12.51L4.21997 8.47C3.71997 7.96 3.31 7.05001 3.31 6.45001V4.12C3.31 2.91 4.22002 2 5.33002 2H18.67C19.78 2 20.69 2.90999 20.69 4.01999Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FilterTickRounded.displayName = "FilterTickRounded";
export const FilterTickRoundedMetadata = { 
  id: "filter-tick_rounded", 
  baseId: "filter-tick", 
  variant: "rounded", 
  name: "Filter Tick", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FilterTickRounded;
