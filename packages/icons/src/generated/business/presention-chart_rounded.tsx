/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PresentionChartRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PresentionChartRounded = React.forwardRef<SVGSVGElement, PresentionChartRoundedProps>(
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
      <path d="M5.89999 17H18.09C19.99 17 20.99 16 20.99 14.1V2H2.98999V14.1C2.99999 16 3.99999 17 5.89999 17Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22L12 20V17"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L12 20"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PresentionChartRounded.displayName = "PresentionChartRounded";
export const PresentionChartRoundedMetadata = { 
  id: "presention-chart_rounded", 
  baseId: "presention-chart", 
  variant: "rounded", 
  name: "Presention Chart", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PresentionChartRounded;
