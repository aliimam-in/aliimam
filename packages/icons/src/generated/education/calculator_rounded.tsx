/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalculatorRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalculatorRounded = React.forwardRef<SVGSVGElement, CalculatorRoundedProps>(
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
<path d="M16.5 7.58V8.58C16.5 9.4 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.41 7.5 8.58V7.58C7.5 6.76 8.17 6.08 9 6.08H15C15.83 6.08 16.5 6.75 16.5 7.58Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.13612 14H8.14767" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9952 14H12.0068" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8544 14H15.8659" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.13612 17.5H8.14767" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9952 17.5H12.0068" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8544 17.5H15.8659" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CalculatorRounded.displayName = "CalculatorRounded";
export const CalculatorRoundedMetadata = { 
  id: "calculator_rounded", 
  baseId: "calculator", 
  variant: "rounded", 
  name: "Calculator", 
  category: "education", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalculatorRounded;
