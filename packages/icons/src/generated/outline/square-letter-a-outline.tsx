/**
 * Auto-generated logo component: Square Letter A Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterAOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterAOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterAOutlineLogoProps>(
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
  <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M10 13h4" />
    </svg>
  )
);

SquareLetterAOutlineLogo.displayName = "SquareLetterAOutlineLogo";

export const SquareLetterAOutlineLogoMetadata = {
  id: "square-letter-a-outline",
  baseId: "square-letter-a-outline",
  variant: "default",
  name: "Square Letter A Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterAOutlineLogo;
