/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterCFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterCFilled = React.forwardRef<SVGSVGElement, SquareLetterCFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 6 0a1 1 0 0 0 -1.993 -.117l-.007 .117a1 1 0 0 1 -2 0v-4a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 0 2 0a3 3 0 0 0 -3 -3" />
    </svg>
  )
);
SquareLetterCFilled.displayName = "SquareLetterCFilled";
export const SquareLetterCFilledMetadata = { 
  id: "square-letter-c_filled", 
  baseId: "square-letter-c", 
  variant: "filled", 
  name: "Square Letter C", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterCFilled;
