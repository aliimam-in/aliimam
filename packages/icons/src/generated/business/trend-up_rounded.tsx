/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrendUpRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrendUpRounded = React.forwardRef<SVGSVGElement, TrendUpRoundedProps>(
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
      <path d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 9.5H16.5V11.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TrendUpRounded.displayName = "TrendUpRounded";
export const TrendUpRoundedMetadata = { 
  id: "trend-up_rounded", 
  baseId: "trend-up", 
  variant: "rounded", 
  name: "Trend Up", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrendUpRounded;
