/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterNFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterNFilled = React.forwardRef<SVGSVGElement, SquareLetterNFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-8.106 5.553c-.471 -.944 -1.894 -.608 -1.894 .447v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3.764l2.106 4.211c.471 .944 1.894 .608 1.894 -.447v-8a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v3.764z" />
    </svg>
  )
);
SquareLetterNFilled.displayName = "SquareLetterNFilled";
export const SquareLetterNFilledMetadata = { 
  id: "square-letter-n_filled", 
  baseId: "square-letter-n", 
  variant: "filled", 
  name: "Square Letter N", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterNFilled;
