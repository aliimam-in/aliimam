/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RotateRightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RotateRightRounded = React.forwardRef<SVGSVGElement, RotateRightRoundedProps>(
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
      <path d="M14.8901 5.08C14.0201 4.82 13.0601 4.65 12.0001 4.65C7.21008 4.65 3.33008 8.53 3.33008 13.32C3.33008 18.12 7.21008 22 12.0001 22C16.7901 22 20.6701 18.12 20.6701 13.33C20.6701 11.55 20.1301 9.89 19.2101 8.51"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.13 5.32L13.24 2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.13 5.32L12.76 7.78"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RotateRightRounded.displayName = "RotateRightRounded";
export const RotateRightRoundedMetadata = { 
  id: "rotate-right_rounded", 
  baseId: "rotate-right", 
  variant: "rounded", 
  name: "Rotate Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RotateRightRounded;
