/**
 * Auto-generated logo component: Square Letter E Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterEOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterEOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterEOutlineLogoProps>(
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
  <path d="M14 8h-4v8h4" />
  <path d="M10 12h2.5" />
    </svg>
  )
);

SquareLetterEOutlineLogo.displayName = "SquareLetterEOutlineLogo";

export const SquareLetterEOutlineLogoMetadata = {
  id: "square-letter-e-outline",
  baseId: "square-letter-e-outline",
  variant: "default",
  name: "Square Letter E Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterEOutlineLogo;
