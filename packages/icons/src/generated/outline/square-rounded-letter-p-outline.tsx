/**
 * Auto-generated logo component: Square Rounded Letter P Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterPOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterPOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterPOutlineLogoProps>(
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
      <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterPOutlineLogo.displayName = "SquareRoundedLetterPOutlineLogo";

export const SquareRoundedLetterPOutlineLogoMetadata = {
  id: "square-rounded-letter-p-outline",
  baseId: "square-rounded-letter-p-outline",
  variant: "default",
  name: "Square Rounded Letter P Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterPOutlineLogo;
