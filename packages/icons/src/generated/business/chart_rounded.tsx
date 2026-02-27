/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartRounded = React.forwardRef<SVGSVGElement, ChartRoundedProps>(
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
      <path d="M3 22H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.59998 8.38H4C3.45 8.38 3 8.83 3 9.38V18C3 18.55 3.45 19 4 19H5.59998C6.14998 19 6.59998 18.55 6.59998 18V9.38C6.59998 8.83 6.14998 8.38 5.59998 8.38Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.7999 5.19H11.2C10.65 5.19 10.2 5.64 10.2 6.19V18C10.2 18.55 10.65 19 11.2 19H12.7999C13.3499 19 13.7999 18.55 13.7999 18V6.19C13.7999 5.64 13.3499 5.19 12.7999 5.19Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9999 2H18.3999C17.8499 2 17.3999 2.45 17.3999 3V18C17.3999 18.55 17.8499 19 18.3999 19H19.9999C20.5499 19 20.9999 18.55 20.9999 18V3C20.9999 2.45 20.5499 2 19.9999 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ChartRounded.displayName = "ChartRounded";
export const ChartRoundedMetadata = { 
  id: "chart_rounded", 
  baseId: "chart", 
  variant: "rounded", 
  name: "Chart", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartRounded;
