/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RulerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RulerRounded = React.forwardRef<SVGSVGElement, RulerRoundedProps>(
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
      <g clipPath="url(#clip0_210_5399)">
<path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M18 7V12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M6 7V11" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M10.05 7L10 12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M14 7V10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_210_5399">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);
RulerRounded.displayName = "RulerRounded";
export const RulerRoundedMetadata = { 
  id: "ruler_rounded", 
  baseId: "ruler", 
  variant: "rounded", 
  name: "Ruler", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RulerRounded;
