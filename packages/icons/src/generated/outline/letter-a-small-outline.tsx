/**
 * Auto-generated logo component: Letter A Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterASmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterASmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterASmallOutlineLogoProps>(
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
      <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M10 13h4" />
    </svg>
  )
);

LetterASmallOutlineLogo.displayName = "LetterASmallOutlineLogo";

export const LetterASmallOutlineLogoMetadata = {
  id: "letter-a-small-outline",
  baseId: "letter-a-small-outline",
  variant: "default",
  name: "Letter A Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterASmallOutlineLogo;
