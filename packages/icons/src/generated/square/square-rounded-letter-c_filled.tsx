/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareRoundedLetterCFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareRoundedLetterCFilled = React.forwardRef<SVGSVGElement, SquareRoundedLetterCFilledProps>(
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
      <path d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m.324 4.999a3 3 0 0 0 -3 3v4a3 3 0 0 0 6 0a1 1 0 0 0 -1.993 -.117l-.007 .117a1 1 0 0 1 -2 0v-4a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 0 2 0a3 3 0 0 0 -3 -3" />
    </svg>
  )
);
SquareRoundedLetterCFilled.displayName = "SquareRoundedLetterCFilled";
export const SquareRoundedLetterCFilledMetadata = { 
  id: "square-rounded-letter-c_filled", 
  baseId: "square-rounded-letter-c", 
  variant: "filled", 
  name: "Square Rounded Letter C", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareRoundedLetterCFilled;
