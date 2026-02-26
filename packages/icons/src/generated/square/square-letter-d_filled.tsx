/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterDFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterDFilled = React.forwardRef<SVGSVGElement, SquareLetterDFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3 -3v-4a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-1v-6z" />
    </svg>
  )
);
SquareLetterDFilled.displayName = "SquareLetterDFilled";
export const SquareLetterDFilledMetadata = { 
  id: "square-letter-d_filled", 
  baseId: "square-letter-d", 
  variant: "filled", 
  name: "Square Letter D", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterDFilled;
