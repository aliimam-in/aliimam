/**
 * Auto-generated logo component: Square Rounded Letter Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterYOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterYOutlineLogoProps>(
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
      <path d="M10 8l2 5l2 -5" />
  <path d="M12 16v-3" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedLetterYOutlineLogo.displayName = "SquareRoundedLetterYOutlineLogo";

export const SquareRoundedLetterYOutlineLogoMetadata = {
  id: "square-rounded-letter-y-outline",
  baseId: "square-rounded-letter-y-outline",
  variant: "default",
  name: "Square Rounded Letter Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterYOutlineLogo;
