/**
 * Auto-generated logo component: Square Rounded Letter X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterXOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterXOutlineLogoProps>(
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
      <path d="M10 8l4 8" />
  <path d="M10 16l4 -8" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterXOutlineLogo.displayName = "SquareRoundedLetterXOutlineLogo";

export const SquareRoundedLetterXOutlineLogoMetadata = {
  id: "square-rounded-letter-x-outline",
  baseId: "square-rounded-letter-x-outline",
  variant: "default",
  name: "Square Rounded Letter X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterXOutlineLogo;
