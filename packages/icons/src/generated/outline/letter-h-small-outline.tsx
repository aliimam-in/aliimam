/**
 * Auto-generated logo component: Letter H Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterHSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterHSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterHSmallOutlineLogoProps>(
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
      <path d="M10 16v-8" />
  <path d="M14 8v8" />
  <path d="M10 12h4" />
    </svg>
  )
);

LetterHSmallOutlineLogo.displayName = "LetterHSmallOutlineLogo";

export const LetterHSmallOutlineLogoMetadata = {
  id: "letter-h-small-outline",
  baseId: "letter-h-small-outline",
  variant: "default",
  name: "Letter H Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterHSmallOutlineLogo;
