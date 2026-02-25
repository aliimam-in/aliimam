/**
 * Auto-generated logo component: Square Letter K Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterKOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterKOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterKOutlineLogoProps>(
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
  <path d="M10 8v8" />
  <path d="M14 8l-2.5 4l2.5 4" />
  <path d="M10 12h1.5" />
    </svg>
  )
);

SquareLetterKOutlineLogo.displayName = "SquareLetterKOutlineLogo";

export const SquareLetterKOutlineLogoMetadata = {
  id: "square-letter-k-outline",
  baseId: "square-letter-k-outline",
  variant: "default",
  name: "Square Letter K Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterKOutlineLogo;
