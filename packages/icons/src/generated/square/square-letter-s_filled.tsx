/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterSFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterSFilled = React.forwardRef<SVGSVGElement, SquareLetterSFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-6 5h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2v2h-2a1 1 0 0 0 -2 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-2v-2h2l.007 .117a1 1 0 0 0 1.993 -.117a2 2 0 0 0 -2 -2" />
    </svg>
  )
);
SquareLetterSFilled.displayName = "SquareLetterSFilled";
export const SquareLetterSFilledMetadata = { 
  id: "square-letter-s_filled", 
  baseId: "square-letter-s", 
  variant: "filled", 
  name: "Square Letter S", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterSFilled;
