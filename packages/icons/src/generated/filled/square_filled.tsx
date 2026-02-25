/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareFilled = React.forwardRef<SVGSVGElement, SquareFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
    </svg>
  )
);
SquareFilled.displayName = "SquareFilled";
export const SquareFilledMetadata = { id: "square_filled", baseId: "square", variant: "filled", name: "Square", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareFilled;
