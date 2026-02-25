/**
 * Auto-generated logo component: Square Letter C Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterCOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterCOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterCOutlineLogoProps>(
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
  <path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    </svg>
  )
);

SquareLetterCOutlineLogo.displayName = "SquareLetterCOutlineLogo";

export const SquareLetterCOutlineLogoMetadata = {
  id: "square-letter-c-outline",
  baseId: "square-letter-c-outline",
  variant: "default",
  name: "Square Letter C Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterCOutlineLogo;
