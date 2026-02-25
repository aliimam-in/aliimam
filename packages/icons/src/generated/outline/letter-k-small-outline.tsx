/**
 * Auto-generated logo component: Letter K Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterKSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterKSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterKSmallOutlineLogoProps>(
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
      <path d="M10.5 8v8" />
  <path d="M14.5 8l-3 4l3 4" />
  <path d="M10.5 12h1" />
    </svg>
  )
);

LetterKSmallOutlineLogo.displayName = "LetterKSmallOutlineLogo";

export const LetterKSmallOutlineLogoMetadata = {
  id: "letter-k-small-outline",
  baseId: "letter-k-small-outline",
  variant: "default",
  name: "Letter K Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterKSmallOutlineLogo;
