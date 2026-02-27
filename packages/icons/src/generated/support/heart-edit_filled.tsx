/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeartEditFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HeartEditFilled = React.forwardRef<SVGSVGElement, HeartEditFilledProps>(
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
      <path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001ZM14.84 11.3801L11.3 14.9201C11.16 15.0601 10.9 15.1901 10.71 15.2201L9.36 15.4001C8.87 15.4701 8.53 15.1301 8.6 14.6401L8.79 13.2901C8.82 13.1001 8.95 12.8301 9.09 12.7001L12.63 9.1601C13.24 8.5501 13.95 8.2601 14.85 9.1601C15.74 10.0601 15.45 10.7701 14.84 11.3801Z" fill="currentColor"/>
    </svg>
  )
);
HeartEditFilled.displayName = "HeartEditFilled";
export const HeartEditFilledMetadata = { 
  id: "heart-edit_filled", 
  baseId: "heart-edit", 
  variant: "filled", 
  name: "Heart Edit", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HeartEditFilled;
