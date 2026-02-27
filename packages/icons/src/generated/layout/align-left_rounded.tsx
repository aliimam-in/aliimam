/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignLeftRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignLeftRounded = React.forwardRef<SVGSVGElement, AlignLeftRoundedProps>(
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
      <path d="M5.09998 19.25H16.9C18.4 19.25 19 18.61 19 17.02V15.98C19 14.39 18.4 13.75 16.9 13.75H5.09998"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.09998 5.25H11.9C13.4 5.25 14 5.89 14 7.48V8.52C14 10.11 13.4 10.75 11.9 10.75H5.09998"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 1.98999V21.99"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AlignLeftRounded.displayName = "AlignLeftRounded";
export const AlignLeftRoundedMetadata = { 
  id: "align-left_rounded", 
  baseId: "align-left", 
  variant: "rounded", 
  name: "Align Left", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignLeftRounded;
