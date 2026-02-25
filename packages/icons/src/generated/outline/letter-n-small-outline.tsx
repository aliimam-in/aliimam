/**
 * Auto-generated logo component: Letter N Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterNSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterNSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterNSmallOutlineLogoProps>(
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
      <path d="M10 16v-8l4 8v-8" />
    </svg>
  )
);

LetterNSmallOutlineLogo.displayName = "LetterNSmallOutlineLogo";

export const LetterNSmallOutlineLogoMetadata = {
  id: "letter-n-small-outline",
  baseId: "letter-n-small-outline",
  variant: "default",
  name: "Letter N Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterNSmallOutlineLogo;
