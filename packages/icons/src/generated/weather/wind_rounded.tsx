/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WindRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WindRounded = React.forwardRef<SVGSVGElement, WindRoundedProps>(
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
      <path d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WindRounded.displayName = "WindRounded";
export const WindRoundedMetadata = { 
  id: "wind_rounded", 
  baseId: "wind", 
  variant: "rounded", 
  name: "Wind", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WindRounded;
