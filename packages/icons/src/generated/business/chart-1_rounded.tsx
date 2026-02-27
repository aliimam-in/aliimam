/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Chart1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Chart1Rounded = React.forwardRef<SVGSVGElement, Chart1RoundedProps>(
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
      <path d="M2 22H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Chart1Rounded.displayName = "Chart1Rounded";
export const Chart1RoundedMetadata = { 
  id: "chart-1_rounded", 
  baseId: "chart-1", 
  variant: "rounded", 
  name: "Chart 1", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Chart1Rounded;
