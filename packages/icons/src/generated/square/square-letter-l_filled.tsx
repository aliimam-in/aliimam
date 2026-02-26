/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterLFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterLFilled = React.forwardRef<SVGSVGElement, SquareLetterLFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-9 5a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3v-7a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
SquareLetterLFilled.displayName = "SquareLetterLFilled";
export const SquareLetterLFilledMetadata = { 
  id: "square-letter-l_filled", 
  baseId: "square-letter-l", 
  variant: "filled", 
  name: "Square Letter L", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterLFilled;
