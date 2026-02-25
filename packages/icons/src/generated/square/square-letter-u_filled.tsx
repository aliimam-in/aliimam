/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterUFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterUFilled = React.forwardRef<SVGSVGElement, SquareLetterUFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5a1 1 0 0 0 -1 1v6a1 1 0 0 1 -2 0v-6a1 1 0 0 0 -2 0v6a3 3 0 0 0 6 0v-6a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
SquareLetterUFilled.displayName = "SquareLetterUFilled";
export const SquareLetterUFilledMetadata = { 
  id: "square-letter-u_filled", 
  baseId: "square-letter-u", 
  variant: "filled", 
  name: "Square Letter U", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterUFilled;
