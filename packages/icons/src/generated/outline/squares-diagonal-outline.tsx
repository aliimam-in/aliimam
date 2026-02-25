/**
 * Auto-generated logo component: Squares Diagonal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquaresDiagonalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquaresDiagonalOutlineLogo = React.forwardRef<SVGSVGElement, SquaresDiagonalOutlineLogoProps>(
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
      <path d="M8 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
  <path d="M8.586 19.414l10.827 -10.827" />
    </svg>
  )
);

SquaresDiagonalOutlineLogo.displayName = "SquaresDiagonalOutlineLogo";

export const SquaresDiagonalOutlineLogoMetadata = {
  id: "squares-diagonal-outline",
  baseId: "squares-diagonal-outline",
  variant: "default",
  name: "Squares Diagonal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquaresDiagonalOutlineLogo;
