/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Maximize3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Maximize3Rounded = React.forwardRef<SVGSVGElement, Maximize3RoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 6L6 18"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 10V6H14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 14V18H10"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Maximize3Rounded.displayName = "Maximize3Rounded";
export const Maximize3RoundedMetadata = { 
  id: "maximize-3_rounded", 
  baseId: "maximize-3", 
  variant: "rounded", 
  name: "Maximize 3", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Maximize3Rounded;
