/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterVFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterVFilled = React.forwardRef<SVGSVGElement, SquareLetterVFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4.757 5.03a1 1 0 0 0 -1.213 .727l-1.03 4.118l-1.03 -4.118a1 1 0 1 0 -1.94 .486l2 8c.252 1.01 1.688 1.01 1.94 0l2 -8a1 1 0 0 0 -.727 -1.213" />
    </svg>
  )
);
SquareLetterVFilled.displayName = "SquareLetterVFilled";
export const SquareLetterVFilledMetadata = { 
  id: "square-letter-v_filled", 
  baseId: "square-letter-v", 
  variant: "filled", 
  name: "Square Letter V", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterVFilled;
