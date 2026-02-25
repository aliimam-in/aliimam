/**
 * Auto-generated logo component: Square Rounded Letter L Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterLOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterLOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterLOutlineLogoProps>(
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
      <path d="M10 8v8h4" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterLOutlineLogo.displayName = "SquareRoundedLetterLOutlineLogo";

export const SquareRoundedLetterLOutlineLogoMetadata = {
  id: "square-rounded-letter-l-outline",
  baseId: "square-rounded-letter-l-outline",
  variant: "default",
  name: "Square Rounded Letter L Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterLOutlineLogo;
