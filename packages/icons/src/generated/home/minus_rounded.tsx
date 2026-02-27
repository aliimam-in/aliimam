/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MinusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MinusRounded = React.forwardRef<SVGSVGElement, MinusRoundedProps>(
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
      <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MinusRounded.displayName = "MinusRounded";
export const MinusRoundedMetadata = { 
  id: "minus_rounded", 
  baseId: "minus", 
  variant: "rounded", 
  name: "Minus", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MinusRounded;
