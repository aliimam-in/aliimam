/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Backward5SecondsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Backward5SecondsRounded = React.forwardRef<SVGSVGElement, Backward5SecondsRoundedProps>(
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
      <path d="M13.9101 10.83H10.8501L10.0901 13.12H12.3801C13.2201 13.12 13.9101 13.8 13.9101 14.65C13.9101 15.49 13.2301 16.18 12.3801 16.18H10.0901"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.02 4.46997L12 2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.90988 7.79999C3.79988 9.27999 3.10986 11.11 3.10986 13.11C3.10986 18.02 7.08988 22 11.9999 22C16.9099 22 20.8899 18.02 20.8899 13.11C20.8899 8.19999 16.9099 4.21997 11.9999 4.21997C11.3199 4.21997 10.6599 4.31002 10.0199 4.46002"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Backward5SecondsRounded.displayName = "Backward5SecondsRounded";
export const Backward5SecondsRoundedMetadata = { 
  id: "backward-5-seconds_rounded", 
  baseId: "backward-5-seconds", 
  variant: "rounded", 
  name: "Backward 5 Seconds", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Backward5SecondsRounded;
