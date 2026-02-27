/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Map1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Map1Rounded = React.forwardRef<SVGSVGElement, Map1RoundedProps>(
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
      <path d="M2.29004 7.78001V17.51C2.29004 19.41 3.64004 20.19 5.28004 19.25L7.63004 17.91C8.14004 17.62 8.99004 17.59 9.52004 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.49001C22 4.59001 20.65 3.81001 19.01 4.75001L16.66 6.09001C16.15 6.38001 15.3 6.41001 14.77 6.14001L9.52004 3.52001C8.99004 3.26001 8.14004 3.28001 7.63004 3.57001L3.30004 6.05001C2.74004 6.37001 2.29004 7.15001 2.29004 7.78001Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.56006 4V17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.73 6.62V20"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Map1Rounded.displayName = "Map1Rounded";
export const Map1RoundedMetadata = { 
  id: "map-1_rounded", 
  baseId: "map-1", 
  variant: "rounded", 
  name: "Map 1", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Map1Rounded;
