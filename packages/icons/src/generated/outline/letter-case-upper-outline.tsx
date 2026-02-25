/**
 * Auto-generated logo component: Letter Case Upper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterCaseUpperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterCaseUpperOutlineLogo = React.forwardRef<SVGSVGElement, LetterCaseUpperOutlineLogoProps>(
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
      <path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
  <path d="M3 13h7" />
  <path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
  <path d="M14 13h7" />
    </svg>
  )
);

LetterCaseUpperOutlineLogo.displayName = "LetterCaseUpperOutlineLogo";

export const LetterCaseUpperOutlineLogoMetadata = {
  id: "letter-case-upper-outline",
  baseId: "letter-case-upper-outline",
  variant: "default",
  name: "Letter Case Upper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterCaseUpperOutlineLogo;
