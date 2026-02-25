/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterOFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterOFilled = React.forwardRef<SVGSVGElement, SquareLetterOFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v4a1 1 0 0 1 -2 0v-4a1 1 0 0 1 1 -1" />
    </svg>
  )
);
SquareLetterOFilled.displayName = "SquareLetterOFilled";
export const SquareLetterOFilledMetadata = { 
  id: "square-letter-o_filled", 
  baseId: "square-letter-o", 
  variant: "filled", 
  name: "Square Letter O", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterOFilled;
