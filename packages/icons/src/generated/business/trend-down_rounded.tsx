/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrendDownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrendDownRounded = React.forwardRef<SVGSVGElement, TrendDownRoundedProps>(
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
      <path d="M16.5 14.5L12.3 10.3L10.7 12.7L7.5 9.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 14.5H16.5V12.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TrendDownRounded.displayName = "TrendDownRounded";
export const TrendDownRoundedMetadata = { 
  id: "trend-down_rounded", 
  baseId: "trend-down", 
  variant: "rounded", 
  name: "Trend Down", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrendDownRounded;
