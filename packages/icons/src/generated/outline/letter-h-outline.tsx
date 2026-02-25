/**
 * Auto-generated logo component: Letter H Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterHOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterHOutlineLogo = React.forwardRef<SVGSVGElement, LetterHOutlineLogoProps>(
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
      <path d="M17 4l0 16" />
  <path d="M7 12l10 0" />
  <path d="M7 4l0 16" />
    </svg>
  )
);

LetterHOutlineLogo.displayName = "LetterHOutlineLogo";

export const LetterHOutlineLogoMetadata = {
  id: "letter-h-outline",
  baseId: "letter-h-outline",
  variant: "default",
  name: "Letter H Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterHOutlineLogo;
