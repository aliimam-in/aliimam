/**
 * Auto-generated logo component: Letter K Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterKOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterKOutlineLogo = React.forwardRef<SVGSVGElement, LetterKOutlineLogoProps>(
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
      <path d="M7 4l0 16" />
  <path d="M7 12h2l8 -8" />
  <path d="M9 12l8 8" />
    </svg>
  )
);

LetterKOutlineLogo.displayName = "LetterKOutlineLogo";

export const LetterKOutlineLogoMetadata = {
  id: "letter-k-outline",
  baseId: "letter-k-outline",
  variant: "default",
  name: "Letter K Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterKOutlineLogo;
