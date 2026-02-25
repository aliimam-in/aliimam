/**
 * Auto-generated logo component: Square Rounded Letter V Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterVOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterVOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterVOutlineLogoProps>(
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
      <path d="M10 8l2 8l2 -8" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterVOutlineLogo.displayName = "SquareRoundedLetterVOutlineLogo";

export const SquareRoundedLetterVOutlineLogoMetadata = {
  id: "square-rounded-letter-v-outline",
  baseId: "square-rounded-letter-v-outline",
  variant: "default",
  name: "Square Rounded Letter V Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterVOutlineLogo;
