/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MinusCirlceRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MinusCirlceRounded = React.forwardRef<SVGSVGElement, MinusCirlceRoundedProps>(
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
      <path d="M11.92 22C17.42 22 21.92 17.5 21.92 12C21.92 6.5 17.42 2 11.92 2C6.42 2 1.92 6.5 1.92 12C1.92 17.5 6.42 22 11.92 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.92 12H15.92" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MinusCirlceRounded.displayName = "MinusCirlceRounded";
export const MinusCirlceRoundedMetadata = { 
  id: "minus-cirlce_rounded", 
  baseId: "minus-cirlce", 
  variant: "rounded", 
  name: "Minus Cirlce", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MinusCirlceRounded;
