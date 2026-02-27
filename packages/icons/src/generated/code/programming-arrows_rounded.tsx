/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ProgrammingArrowsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ProgrammingArrowsRounded = React.forwardRef<SVGSVGElement, ProgrammingArrowsRoundedProps>(
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
      <path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 2L11 4.5L14 7"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 8V17.5C5 18.6 5.9 19.5 7 19.5H12.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 22L13 19.5L10 17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ProgrammingArrowsRounded.displayName = "ProgrammingArrowsRounded";
export const ProgrammingArrowsRoundedMetadata = { 
  id: "programming-arrows_rounded", 
  baseId: "programming-arrows", 
  variant: "rounded", 
  name: "Programming Arrows", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ProgrammingArrowsRounded;
