/**
 * Auto-generated logo component: Square Letter X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterXOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterXOutlineLogoProps>(
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
  <path d="M10 8l4 8" />
  <path d="M10 16l4 -8" />
    </svg>
  )
);

SquareLetterXOutlineLogo.displayName = "SquareLetterXOutlineLogo";

export const SquareLetterXOutlineLogoMetadata = {
  id: "square-letter-x-outline",
  baseId: "square-letter-x-outline",
  variant: "default",
  name: "Square Letter X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterXOutlineLogo;
