/**
 * Auto-generated logo component: Letter X Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterXSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterXSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterXSmallOutlineLogoProps>(
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
      <path d="M10 8l4 8" />
  <path d="M10 16l4 -8" />
    </svg>
  )
);

LetterXSmallOutlineLogo.displayName = "LetterXSmallOutlineLogo";

export const LetterXSmallOutlineLogoMetadata = {
  id: "letter-x-small-outline",
  baseId: "letter-x-small-outline",
  variant: "default",
  name: "Letter X Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterXSmallOutlineLogo;
