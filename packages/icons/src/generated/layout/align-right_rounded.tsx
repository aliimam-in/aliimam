/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignRightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignRightRounded = React.forwardRef<SVGSVGElement, AlignRightRoundedProps>(
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
      <path d="M18.9 19.25H7.1C5.6 19.25 5 18.61 5 17.02V15.98C5 14.39 5.6 13.75 7.1 13.75H18.9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.9 5.25H12.1C10.6 5.25 10 5.89 10 7.48V8.52C10 10.11 10.6 10.75 12.1 10.75H18.9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 1.98999V21.99" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AlignRightRounded.displayName = "AlignRightRounded";
export const AlignRightRoundedMetadata = { 
  id: "align-right_rounded", 
  baseId: "align-right", 
  variant: "rounded", 
  name: "Align Right", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignRightRounded;
