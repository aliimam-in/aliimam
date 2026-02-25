/**
 * Auto-generated logo component: Square Rounded Letter W Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterWOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterWOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterWOutlineLogoProps>(
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
      <path d="M9 8l1 8l2 -5l2 5l1 -8" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterWOutlineLogo.displayName = "SquareRoundedLetterWOutlineLogo";

export const SquareRoundedLetterWOutlineLogoMetadata = {
  id: "square-rounded-letter-w-outline",
  baseId: "square-rounded-letter-w-outline",
  variant: "default",
  name: "Square Rounded Letter W Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterWOutlineLogo;
