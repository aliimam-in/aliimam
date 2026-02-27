/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MinusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MinusFilled = React.forwardRef<SVGSVGElement, MinusFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="currentColor"/>
    </svg>
  )
);
MinusFilled.displayName = "MinusFilled";
export const MinusFilledMetadata = { 
  id: "minus_filled", 
  baseId: "minus", 
  variant: "filled", 
  name: "Minus", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MinusFilled;
