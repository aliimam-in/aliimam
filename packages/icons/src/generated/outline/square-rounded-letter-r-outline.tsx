/**
 * Auto-generated logo component: Square Rounded Letter R Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterROutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterROutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterROutlineLogoProps>(
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
      <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterROutlineLogo.displayName = "SquareRoundedLetterROutlineLogo";

export const SquareRoundedLetterROutlineLogoMetadata = {
  id: "square-rounded-letter-r-outline",
  baseId: "square-rounded-letter-r-outline",
  variant: "default",
  name: "Square Rounded Letter R Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterROutlineLogo;
