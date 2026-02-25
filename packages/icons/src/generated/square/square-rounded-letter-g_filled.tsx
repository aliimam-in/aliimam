/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareRoundedLetterGFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareRoundedLetterGFilled = React.forwardRef<SVGSVGElement, SquareRoundedLetterGFilledProps>(
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
      <path d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m2.324 4.999h-2a3 3 0 0 0 -3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883v2h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2a1 1 0 0 0 0 -2" />
    </svg>
  )
);
SquareRoundedLetterGFilled.displayName = "SquareRoundedLetterGFilled";
export const SquareRoundedLetterGFilledMetadata = { 
  id: "square-rounded-letter-g_filled", 
  baseId: "square-rounded-letter-g", 
  variant: "filled", 
  name: "Square Rounded Letter G", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareRoundedLetterGFilled;
