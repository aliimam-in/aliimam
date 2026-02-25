/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterHFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterHFilled = React.forwardRef<SVGSVGElement, SquareLetterHFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5a1 1 0 0 0 -1 1v3h-2v-3a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-3h2v3a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
SquareLetterHFilled.displayName = "SquareLetterHFilled";
export const SquareLetterHFilledMetadata = { id: "square-letter-h_filled", baseId: "square-letter-h", variant: "filled", name: "Square Letter H", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareLetterHFilled;
