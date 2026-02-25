/**
 * Auto-generated logo component: Square Letter H Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterHOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterHOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterHOutlineLogoProps>(
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
  <path d="M10 16v-8m4 0v8" />
  <path d="M10 12h4" />
    </svg>
  )
);

SquareLetterHOutlineLogo.displayName = "SquareLetterHOutlineLogo";

export const SquareLetterHOutlineLogoMetadata = {
  id: "square-letter-h-outline",
  baseId: "square-letter-h-outline",
  variant: "default",
  name: "Square Letter H Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterHOutlineLogo;
