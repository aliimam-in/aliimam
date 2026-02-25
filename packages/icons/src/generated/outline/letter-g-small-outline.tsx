/**
 * Auto-generated logo component: Letter G Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterGSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterGSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterGSmallOutlineLogoProps>(
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
      <path d="M14 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    </svg>
  )
);

LetterGSmallOutlineLogo.displayName = "LetterGSmallOutlineLogo";

export const LetterGSmallOutlineLogoMetadata = {
  id: "letter-g-small-outline",
  baseId: "letter-g-small-outline",
  variant: "default",
  name: "Letter G Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterGSmallOutlineLogo;
