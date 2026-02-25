/**
 * Auto-generated logo component: Square Letter P Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterPOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterPOutlineLogo = React.forwardRef<SVGSVGElement, SquareLetterPOutlineLogoProps>(
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
  <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" />
    </svg>
  )
);

SquareLetterPOutlineLogo.displayName = "SquareLetterPOutlineLogo";

export const SquareLetterPOutlineLogoMetadata = {
  id: "square-letter-p-outline",
  baseId: "square-letter-p-outline",
  variant: "default",
  name: "Square Letter P Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterPOutlineLogo;
