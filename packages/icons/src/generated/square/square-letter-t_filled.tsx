/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterTFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterTFilled = React.forwardRef<SVGSVGElement, SquareLetterTFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5h-4a1 1 0 1 0 0 2h1v7a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-7h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
SquareLetterTFilled.displayName = "SquareLetterTFilled";
export const SquareLetterTFilledMetadata = { 
  id: "square-letter-t_filled", 
  baseId: "square-letter-t", 
  variant: "filled", 
  name: "Square Letter T", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterTFilled;
