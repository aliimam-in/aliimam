/**
 * Auto-generated logo component: Square Letter T Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterTOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterTOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterTOutlineLogoProps>(
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
  <path d="M10 8h4" />
  <path d="M12 8v8" />
    </svg>
  )
);

SquareLetterTOutlineLogo.displayName = "SquareLetterTOutlineLogo";

export const SquareLetterTOutlineLogoMetadata = {
  id: "square-letter-t-outline",
  baseId: "square-letter-t-outline",
  variant: "default",
  name: "Square Letter T Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterTOutlineLogo;
