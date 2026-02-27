/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PercentageSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PercentageSquareRounded = React.forwardRef<SVGSVGElement, PercentageSquareRoundedProps>(
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
      <path d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.57007 15.27L15.11 8.72998"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.98001 10.37C9.65932 10.37 10.21 9.81936 10.21 9.14005C10.21 8.46073 9.65932 7.91003 8.98001 7.91003C8.3007 7.91003 7.75 8.46073 7.75 9.14005C7.75 9.81936 8.3007 10.37 8.98001 10.37Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.52 16.09C16.1993 16.09 16.75 15.5393 16.75 14.86C16.75 14.1807 16.1993 13.63 15.52 13.63C14.8407 13.63 14.29 14.1807 14.29 14.86C14.29 15.5393 14.8407 16.09 15.52 16.09Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PercentageSquareRounded.displayName = "PercentageSquareRounded";
export const PercentageSquareRoundedMetadata = { 
  id: "percentage-square_rounded", 
  baseId: "percentage-square", 
  variant: "rounded", 
  name: "Percentage Square", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PercentageSquareRounded;
