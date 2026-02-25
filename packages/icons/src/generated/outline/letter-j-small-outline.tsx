/**
 * Auto-generated logo component: Letter J Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterJSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterJSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterJSmallOutlineLogoProps>(
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
      <path d="M10 8h4v6a2 2 0 1 1 -4 0" />
    </svg>
  )
);

LetterJSmallOutlineLogo.displayName = "LetterJSmallOutlineLogo";

export const LetterJSmallOutlineLogoMetadata = {
  id: "letter-j-small-outline",
  baseId: "letter-j-small-outline",
  variant: "default",
  name: "Letter J Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterJSmallOutlineLogo;
