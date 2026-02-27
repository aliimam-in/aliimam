/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MaximizeCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MaximizeCircleRounded = React.forwardRef<SVGSVGElement, MaximizeCircleRoundedProps>(
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
      <path d="M17 3H21V7"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9L21 3"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21H3V17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15L3 21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.02 2.20001C13.37 2.07001 12.69 2 12 2C6.48 2 2 6.48 2 12C2 12.69 2.07001 13.36 2.20001 14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.97998 21.8C10.63 21.93 11.31 22 12 22C17.52 22 22 17.52 22 12C22 11.32 21.93 10.65 21.8 10"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MaximizeCircleRounded.displayName = "MaximizeCircleRounded";
export const MaximizeCircleRoundedMetadata = { 
  id: "maximize-circle_rounded", 
  baseId: "maximize-circle", 
  variant: "rounded", 
  name: "Maximize Circle", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MaximizeCircleRounded;
