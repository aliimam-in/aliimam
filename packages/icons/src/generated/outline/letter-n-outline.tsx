/**
 * Auto-generated logo component: Letter N Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterNOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterNOutlineLogo = React.forwardRef<SVGSVGElement, LetterNOutlineLogoProps>(
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
      <path d="M7 20v-16l10 16v-16" />
    </svg>
  )
);

LetterNOutlineLogo.displayName = "LetterNOutlineLogo";

export const LetterNOutlineLogoMetadata = {
  id: "letter-n-outline",
  baseId: "letter-n-outline",
  variant: "default",
  name: "Letter N Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterNOutlineLogo;
