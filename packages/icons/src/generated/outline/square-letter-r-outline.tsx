/**
 * Auto-generated logo component: Square Letter R Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterROutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterROutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterROutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
    </svg>
  )
);

SquareLetterROutlineLogo.displayName = "SquareLetterROutlineLogo";

export const SquareLetterROutlineLogoMetadata = {
  id: "square-letter-r-outline",
  baseId: "square-letter-r-outline",
  variant: "default",
  name: "Square Letter R Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterROutlineLogo;
