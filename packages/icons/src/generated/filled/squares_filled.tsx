/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquaresFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquaresFilled = React.forwardRef<SVGSVGElement, SquaresFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 7a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3z" />
  <path d="M14 2a3 3 0 0 1 3 2.999l-7 .001a5 5 0 0 0 -5 5l-.001 7l-.175 -.005a3 3 0 0 1 -2.824 -2.995v-9a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
SquaresFilled.displayName = "SquaresFilled";
export const SquaresFilledMetadata = { id: "squares_filled", baseId: "squares", variant: "filled", name: "Squares", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default SquaresFilled;
