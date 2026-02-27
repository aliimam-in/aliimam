/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRight3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRight3Rounded = React.forwardRef<SVGSVGElement, ArrowRight3RoundedProps>(
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
      <path d="M6 12V9.33C6 6.02 8.35 4.66 11.22 6.32L13.53 7.66L15.84 9C18.71 10.66 18.71 13.37 15.84 15.03L13.53 16.37L11.22 17.71C8.35 19.34 6 17.99 6 14.67V12Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowRight3Rounded.displayName = "ArrowRight3Rounded";
export const ArrowRight3RoundedMetadata = { 
  id: "arrow-right-3_rounded", 
  baseId: "arrow-right-3", 
  variant: "rounded", 
  name: "Arrow Right 3", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRight3Rounded;
