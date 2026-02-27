/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WeightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WeightRounded = React.forwardRef<SVGSVGElement, WeightRoundedProps>(
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
      <path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.25 8.28998C14.26 5.62998 9.74 5.62998 6.75 8.28998L8.93 11.79C10.68 10.23 13.32 10.23 15.07 11.79L17.25 8.28998Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WeightRounded.displayName = "WeightRounded";
export const WeightRoundedMetadata = { 
  id: "weight_rounded", 
  baseId: "weight", 
  variant: "rounded", 
  name: "Weight", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WeightRounded;
