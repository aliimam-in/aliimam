/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareRoundedLetterPFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareRoundedLetterPFilled = React.forwardRef<SVGSVGElement, SquareRoundedLetterPFilledProps>(
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
      <path d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m.324 4.999h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3h1a3 3 0 0 0 0 -6m0 2a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);
SquareRoundedLetterPFilled.displayName = "SquareRoundedLetterPFilled";
export const SquareRoundedLetterPFilledMetadata = { 
  id: "square-rounded-letter-p_filled", 
  baseId: "square-rounded-letter-p", 
  variant: "filled", 
  name: "Square Rounded Letter P", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareRoundedLetterPFilled;
