/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NextFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NextFilled = React.forwardRef<SVGSVGElement, NextFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M3.76001 7.22006V16.7901C3.76001 18.7501 5.89001 19.9801 7.59001 19.0001L11.74 16.6101L15.89 14.2101C17.59 13.2301 17.59 10.7801 15.89 9.80006L11.74 7.40006L7.59001 5.01006C5.89001 4.03006 3.76001 5.25006 3.76001 7.22006Z" fill="currentColor"/>
<path d="M20.24 18.9301C19.83 18.9301 19.49 18.5901 19.49 18.1801V5.82007C19.49 5.41007 19.83 5.07007 20.24 5.07007C20.65 5.07007 20.99 5.41007 20.99 5.82007V18.1801C20.99 18.5901 20.66 18.9301 20.24 18.9301Z" fill="currentColor"/>
    </svg>
  )
);
NextFilled.displayName = "NextFilled";
export const NextFilledMetadata = { 
  id: "next_filled", 
  baseId: "next", 
  variant: "filled", 
  name: "Next", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NextFilled;
