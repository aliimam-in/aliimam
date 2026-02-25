/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareRoundedLetterBFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareRoundedLetterBFilled = React.forwardRef<SVGSVGElement, SquareRoundedLetterBFilledProps>(
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
      <path d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m.324 4.999h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3 -3l-.005 -.176a3 3 0 0 0 -.654 -1.7l-.106 -.124l.106 -.124a3 3 0 0 0 -2.341 -4.876m0 6a1 1 0 0 1 0 2h-1v-2zm0 -4a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);
SquareRoundedLetterBFilled.displayName = "SquareRoundedLetterBFilled";
export const SquareRoundedLetterBFilledMetadata = { 
  id: "square-rounded-letter-b_filled", 
  baseId: "square-rounded-letter-b", 
  variant: "filled", 
  name: "Square Rounded Letter B", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareRoundedLetterBFilled;
