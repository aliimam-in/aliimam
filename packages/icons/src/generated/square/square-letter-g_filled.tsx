/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterGFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterGFilled = React.forwardRef<SVGSVGElement, SquareLetterGFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5h-2a3 3 0 0 0 -3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883v2h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2a1 1 0 0 0 0 -2" />
    </svg>
  )
);
SquareLetterGFilled.displayName = "SquareLetterGFilled";
export const SquareLetterGFilledMetadata = { 
  id: "square-letter-g_filled", 
  baseId: "square-letter-g", 
  variant: "filled", 
  name: "Square Letter G", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterGFilled;
