/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HomeTrendDownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HomeTrendDownRounded = React.forwardRef<SVGSVGElement, HomeTrendDownRoundedProps>(
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
      <path d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 16.5L12.3 12.3L10.7 14.7L7.5 11.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 16.5H16.5V14.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HomeTrendDownRounded.displayName = "HomeTrendDownRounded";
export const HomeTrendDownRoundedMetadata = { 
  id: "home-trend-down_rounded", 
  baseId: "home-trend-down", 
  variant: "rounded", 
  name: "Home Trend Down", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HomeTrendDownRounded;
