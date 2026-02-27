/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RotateLeftRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RotateLeftRounded = React.forwardRef<SVGSVGElement, RotateLeftRoundedProps>(
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
      <path d="M9.11008 5.08C9.98008 4.82 10.9401 4.65 12.0001 4.65C16.7901 4.65 20.6701 8.53 20.6701 13.32C20.6701 18.11 16.7901 21.99 12.0001 21.99C7.21008 21.99 3.33008 18.11 3.33008 13.32C3.33008 11.54 3.87008 9.88 4.79008 8.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.87012 5.32L10.7601 2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.87012 5.32L11.2401 7.78" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RotateLeftRounded.displayName = "RotateLeftRounded";
export const RotateLeftRoundedMetadata = { 
  id: "rotate-left_rounded", 
  baseId: "rotate-left", 
  variant: "rounded", 
  name: "Rotate Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RotateLeftRounded;
