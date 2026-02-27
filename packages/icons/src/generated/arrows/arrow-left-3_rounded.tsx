/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeft3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeft3Rounded = React.forwardRef<SVGSVGElement, ArrowLeft3RoundedProps>(
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
      <path d="M18.0001 12V14.67C18.0001 17.98 15.6501 19.34 12.7801 17.68L10.4701 16.34L8.16007 15C5.29007 13.34 5.29007 10.63 8.16007 8.97L10.4701 7.63L12.7801 6.29C15.6501 4.66 18.0001 6.01 18.0001 9.33V12Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowLeft3Rounded.displayName = "ArrowLeft3Rounded";
export const ArrowLeft3RoundedMetadata = { 
  id: "arrow-left-3_rounded", 
  baseId: "arrow-left-3", 
  variant: "rounded", 
  name: "Arrow Left 3", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeft3Rounded;
