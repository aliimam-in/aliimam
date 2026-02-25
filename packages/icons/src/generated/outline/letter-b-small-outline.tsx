/**
 * Auto-generated logo component: Letter B Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterBSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterBSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterBSmallOutlineLogoProps>(
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
      <path d="M10 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8" />
    </svg>
  )
);

LetterBSmallOutlineLogo.displayName = "LetterBSmallOutlineLogo";

export const LetterBSmallOutlineLogoMetadata = {
  id: "letter-b-small-outline",
  baseId: "letter-b-small-outline",
  variant: "default",
  name: "Letter B Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterBSmallOutlineLogo;
