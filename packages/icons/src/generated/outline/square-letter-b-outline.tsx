/**
 * Auto-generated logo component: Square Letter B Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterBOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterBOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterBOutlineLogoProps>(
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
  <path d="M10 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8" />
    </svg>
  )
);

SquareLetterBOutlineLogo.displayName = "SquareLetterBOutlineLogo";

export const SquareLetterBOutlineLogoMetadata = {
  id: "square-letter-b-outline",
  baseId: "square-letter-b-outline",
  variant: "default",
  name: "Square Letter B Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterBOutlineLogo;
