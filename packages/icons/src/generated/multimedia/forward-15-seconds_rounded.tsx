/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Forward15SecondsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Forward15SecondsRounded = React.forwardRef<SVGSVGElement, Forward15SecondsRoundedProps>(
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
      <path d="M15.9601 10.83H12.9001L12.1401 13.12H14.4301C15.2701 13.12 15.9601 13.8 15.9601 14.65C15.9601 15.49 15.2801 16.18 14.4301 16.18H12.1401" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.54004 16.17V10.83L8.04004 12.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.98 4.46997L12 2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Forward15SecondsRounded.displayName = "Forward15SecondsRounded";
export const Forward15SecondsRoundedMetadata = { 
  id: "forward-15-seconds_rounded", 
  baseId: "forward-15-seconds", 
  variant: "rounded", 
  name: "Forward 15 Seconds", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Forward15SecondsRounded;
