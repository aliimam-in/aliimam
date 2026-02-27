/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Arrow2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Arrow2Rounded = React.forwardRef<SVGSVGElement, Arrow2RoundedProps>(
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
      <path d="M17.28 10.45L21 6.72998L17.28 3.01001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6.72998H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.71997 13.55L3 17.27L6.71997 20.99"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17.27H3"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Arrow2Rounded.displayName = "Arrow2Rounded";
export const Arrow2RoundedMetadata = { 
  id: "arrow-2_rounded", 
  baseId: "arrow-2", 
  variant: "rounded", 
  name: "Arrow 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Arrow2Rounded;
