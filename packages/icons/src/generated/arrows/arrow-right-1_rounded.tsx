/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRight1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRight1Rounded = React.forwardRef<SVGSVGElement, ArrowRight1RoundedProps>(
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
      <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.08"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowRight1Rounded.displayName = "ArrowRight1Rounded";
export const ArrowRight1RoundedMetadata = { 
  id: "arrow-right-1_rounded", 
  baseId: "arrow-right-1", 
  variant: "rounded", 
  name: "Arrow Right 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRight1Rounded;
