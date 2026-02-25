/**
 * Auto-generated logo component: Letter U Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterUOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterUOutlineLogo = React.forwardRef<SVGSVGElement, LetterUOutlineLogoProps>(
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
      <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-11" />
    </svg>
  )
);

LetterUOutlineLogo.displayName = "LetterUOutlineLogo";

export const LetterUOutlineLogoMetadata = {
  id: "letter-u-outline",
  baseId: "letter-u-outline",
  variant: "default",
  name: "Letter U Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterUOutlineLogo;
