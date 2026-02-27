/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Chart21RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Chart21Rounded = React.forwardRef<SVGSVGElement, Chart21RoundedProps>(
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
      <path d="M7 10.74V13.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9V15.68" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10.74V13.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Chart21Rounded.displayName = "Chart21Rounded";
export const Chart21RoundedMetadata = { 
  id: "chart-21_rounded", 
  baseId: "chart-21", 
  variant: "rounded", 
  name: "Chart 21", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Chart21Rounded;
