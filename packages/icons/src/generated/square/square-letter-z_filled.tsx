/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterZFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterZFilled = React.forwardRef<SVGSVGElement, SquareLetterZFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.382l-3.276 6.553a1 1 0 0 0 .894 1.447h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-2.382l3.276 -6.553a1 1 0 0 0 -.894 -1.447" />
    </svg>
  )
);
SquareLetterZFilled.displayName = "SquareLetterZFilled";
export const SquareLetterZFilledMetadata = { 
  id: "square-letter-z_filled", 
  baseId: "square-letter-z", 
  variant: "filled", 
  name: "Square Letter Z", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterZFilled;
