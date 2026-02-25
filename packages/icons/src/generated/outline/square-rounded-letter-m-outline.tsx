/**
 * Auto-generated logo component: Square Rounded Letter M Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterMOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterMOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterMOutlineLogoProps>(
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
      <path d="M9 16v-8l3 5l3 -5v8" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterMOutlineLogo.displayName = "SquareRoundedLetterMOutlineLogo";

export const SquareRoundedLetterMOutlineLogoMetadata = {
  id: "square-rounded-letter-m-outline",
  baseId: "square-rounded-letter-m-outline",
  variant: "default",
  name: "Square Rounded Letter M Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterMOutlineLogo;
