/**
 * Auto-generated logo component: Square Rounded Letter A Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterAOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterAOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterAOutlineLogoProps>(
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
      <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M10 13h4" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterAOutlineLogo.displayName = "SquareRoundedLetterAOutlineLogo";

export const SquareRoundedLetterAOutlineLogoMetadata = {
  id: "square-rounded-letter-a-outline",
  baseId: "square-rounded-letter-a-outline",
  variant: "default",
  name: "Square Rounded Letter A Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterAOutlineLogo;
