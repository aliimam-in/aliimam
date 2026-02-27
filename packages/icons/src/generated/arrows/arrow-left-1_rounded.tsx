/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeft1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeft1Rounded = React.forwardRef<SVGSVGElement, ArrowLeft1RoundedProps>(
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
      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.08" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowLeft1Rounded.displayName = "ArrowLeft1Rounded";
export const ArrowLeft1RoundedMetadata = { 
  id: "arrow-left-1_rounded", 
  baseId: "arrow-left-1", 
  variant: "rounded", 
  name: "Arrow Left 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeft1Rounded;
