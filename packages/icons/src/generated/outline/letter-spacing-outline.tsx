/**
 * Auto-generated logo component: Letter Spacing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterSpacingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterSpacingOutlineLogo = React.forwardRef<SVGSVGElement, LetterSpacingOutlineLogoProps>(
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
      <path d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
  <path d="M13 4l3 8l3 -8" />
  <path d="M5 18h14" />
  <path d="M17 20l2 -2l-2 -2" />
  <path d="M7 16l-2 2l2 2" />
    </svg>
  )
);

LetterSpacingOutlineLogo.displayName = "LetterSpacingOutlineLogo";

export const LetterSpacingOutlineLogoMetadata = {
  id: "letter-spacing-outline",
  baseId: "letter-spacing-outline",
  variant: "default",
  name: "Letter Spacing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterSpacingOutlineLogo;
