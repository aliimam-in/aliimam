/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterEFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterEFilled = React.forwardRef<SVGSVGElement, SquareLetterEFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5h-4a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3v-2h1.5a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-1.5v-2h3a1 1 0 0 0 0 -2" />
    </svg>
  )
);
SquareLetterEFilled.displayName = "SquareLetterEFilled";
export const SquareLetterEFilledMetadata = { id: "square-letter-e_filled", baseId: "square-letter-e", variant: "filled", name: "Square Letter E", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareLetterEFilled;
