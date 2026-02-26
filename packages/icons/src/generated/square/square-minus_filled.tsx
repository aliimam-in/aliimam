/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareMinusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareMinusFilled = React.forwardRef<SVGSVGElement, SquareMinusFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);
SquareMinusFilled.displayName = "SquareMinusFilled";
export const SquareMinusFilledMetadata = { 
  id: "square-minus_filled", 
  baseId: "square-minus", 
  variant: "filled", 
  name: "Square Minus", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareMinusFilled;
