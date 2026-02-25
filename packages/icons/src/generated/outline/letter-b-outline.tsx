/**
 * Auto-generated logo component: Letter B Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterBOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterBOutlineLogo = React.forwardRef<SVGSVGElement, LetterBOutlineLogoProps>(
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
      <path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" />
  <path d="M7 12l6 0" />
    </svg>
  )
);

LetterBOutlineLogo.displayName = "LetterBOutlineLogo";

export const LetterBOutlineLogoMetadata = {
  id: "letter-b-outline",
  baseId: "letter-b-outline",
  variant: "default",
  name: "Letter B Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterBOutlineLogo;
