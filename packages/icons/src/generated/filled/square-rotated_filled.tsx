/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareRotatedFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareRotatedFilled = React.forwardRef<SVGSVGElement, SquareRotatedFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M9.793 2.893l-6.9 6.9c-1.172 1.171 -1.172 3.243 0 4.414l6.9 6.9c1.171 1.172 3.243 1.172 4.414 0l6.9 -6.9c1.172 -1.171 1.172 -3.243 0 -4.414l-6.9 -6.9c-1.171 -1.172 -3.243 -1.172 -4.414 0z" />
    </svg>
  )
);
SquareRotatedFilled.displayName = "SquareRotatedFilled";
export const SquareRotatedFilledMetadata = { id: "square-rotated_filled", baseId: "square-rotated", variant: "filled", name: "Square Rotated", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareRotatedFilled;
