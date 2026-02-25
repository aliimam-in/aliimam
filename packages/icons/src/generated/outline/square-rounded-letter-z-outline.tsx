/**
 * Auto-generated logo component: Square Rounded Letter Z Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterZOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterZOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterZOutlineLogoProps>(
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
      <path d="M10 8h4l-4 8h4" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterZOutlineLogo.displayName = "SquareRoundedLetterZOutlineLogo";

export const SquareRoundedLetterZOutlineLogoMetadata = {
  id: "square-rounded-letter-z-outline",
  baseId: "square-rounded-letter-z-outline",
  variant: "default",
  name: "Square Rounded Letter Z Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterZOutlineLogo;
