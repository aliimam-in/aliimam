/**
 * Auto-generated logo component: Square Rounded Letter C Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterCOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterCOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterCOutlineLogoProps>(
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
      <path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterCOutlineLogo.displayName = "SquareRoundedLetterCOutlineLogo";

export const SquareRoundedLetterCOutlineLogoMetadata = {
  id: "square-rounded-letter-c-outline",
  baseId: "square-rounded-letter-c-outline",
  variant: "default",
  name: "Square Rounded Letter C Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterCOutlineLogo;
