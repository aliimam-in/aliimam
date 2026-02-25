/**
 * Auto-generated logo component: Square Letter Z Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterZOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterZOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterZOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M10 8h4l-4 8h4" />
    </svg>
  )
);

SquareLetterZOutlineLogo.displayName = "SquareLetterZOutlineLogo";

export const SquareLetterZOutlineLogoMetadata = {
  id: "square-letter-z-outline",
  baseId: "square-letter-z-outline",
  variant: "default",
  name: "Square Letter Z Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterZOutlineLogo;
