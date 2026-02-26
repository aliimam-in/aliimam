/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterRFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterRFilled = React.forwardRef<SVGSVGElement, SquareLetterRFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-2.332l2.2 2.932a1 1 0 0 0 1.4 .2l.096 -.081a1 1 0 0 0 .104 -1.319l-1.903 -2.538l.115 -.037a3.001 3.001 0 0 0 -1.012 -5.825m0 2a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);
SquareLetterRFilled.displayName = "SquareLetterRFilled";
export const SquareLetterRFilledMetadata = { 
  id: "square-letter-r_filled", 
  baseId: "square-letter-r", 
  variant: "filled", 
  name: "Square Letter R", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterRFilled;
