/**
 * Auto-generated logo component: Square Letter J Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterJOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterJOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterJOutlineLogoProps>(
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
  <path d="M10 8h4v6a2 2 0 1 1 -4 0" />
    </svg>
  )
);

SquareLetterJOutlineLogo.displayName = "SquareLetterJOutlineLogo";

export const SquareLetterJOutlineLogoMetadata = {
  id: "square-letter-j-outline",
  baseId: "square-letter-j-outline",
  variant: "default",
  name: "Square Letter J Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterJOutlineLogo;
