/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Arrow3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Arrow3Rounded = React.forwardRef<SVGSVGElement, Arrow3RoundedProps>(
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
      <path d="M10.45 6.71997L6.72998 3L3.01001 6.71997"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.72998 21V3"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.55 17.28L17.2701 21L20.9901 17.28"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.27 3V21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Arrow3Rounded.displayName = "Arrow3Rounded";
export const Arrow3RoundedMetadata = { 
  id: "arrow-3_rounded", 
  baseId: "arrow-3", 
  variant: "rounded", 
  name: "Arrow 3", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Arrow3Rounded;
