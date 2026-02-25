/**
 * Auto-generated logo component: Letter R Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterRSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterRSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterRSmallOutlineLogoProps>(
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
      <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
    </svg>
  )
);

LetterRSmallOutlineLogo.displayName = "LetterRSmallOutlineLogo";

export const LetterRSmallOutlineLogoMetadata = {
  id: "letter-r-small-outline",
  baseId: "letter-r-small-outline",
  variant: "default",
  name: "Letter R Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterRSmallOutlineLogo;
