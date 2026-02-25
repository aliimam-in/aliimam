/**
 * Auto-generated logo component: Square Letter W Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterWOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterWOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterWOutlineLogoProps>(
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
  <path d="M9 8l1 8l2 -5l2 5l1 -8" />
    </svg>
  )
);

SquareLetterWOutlineLogo.displayName = "SquareLetterWOutlineLogo";

export const SquareLetterWOutlineLogoMetadata = {
  id: "square-letter-w-outline",
  baseId: "square-letter-w-outline",
  variant: "default",
  name: "Square Letter W Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterWOutlineLogo;
