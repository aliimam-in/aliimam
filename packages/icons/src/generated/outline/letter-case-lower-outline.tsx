/**
 * Auto-generated logo component: Letter Case Lower Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterCaseLowerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterCaseLowerOutlineLogo = React.forwardRef<SVGSVGElement, LetterCaseLowerOutlineLogoProps>(
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
      <path d="M3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  <path d="M10 12v7" />
  <path d="M14 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  <path d="M21 12v7" />
    </svg>
  )
);

LetterCaseLowerOutlineLogo.displayName = "LetterCaseLowerOutlineLogo";

export const LetterCaseLowerOutlineLogoMetadata = {
  id: "letter-case-lower-outline",
  baseId: "letter-case-lower-outline",
  variant: "default",
  name: "Letter Case Lower Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterCaseLowerOutlineLogo;
