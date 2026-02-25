/**
 * Auto-generated logo component: Letter E Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterESmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterESmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterESmallOutlineLogoProps>(
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
      <path d="M14 8h-4v8h4" />
  <path d="M10 12h2.5" />
    </svg>
  )
);

LetterESmallOutlineLogo.displayName = "LetterESmallOutlineLogo";

export const LetterESmallOutlineLogoMetadata = {
  id: "letter-e-small-outline",
  baseId: "letter-e-small-outline",
  variant: "default",
  name: "Letter E Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterESmallOutlineLogo;
