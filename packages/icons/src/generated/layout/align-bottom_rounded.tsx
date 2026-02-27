/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignBottomRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignBottomRounded = React.forwardRef<SVGSVGElement, AlignBottomRoundedProps>(
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
      <path d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 5H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AlignBottomRounded.displayName = "AlignBottomRounded";
export const AlignBottomRoundedMetadata = { 
  id: "align-bottom_rounded", 
  baseId: "align-bottom", 
  variant: "rounded", 
  name: "Align Bottom", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignBottomRounded;
