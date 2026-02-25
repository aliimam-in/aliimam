/**
 * Auto-generated logo component: Alphabet Runes Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetRunesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetRunesOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetRunesOutlineLogoProps>(
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
      <path d="M17 18v-12" />
  <path d="M13 6l4 4l4 -4" />
  <path d="M11 18l-7 -8l4 -4l4 4l-7 8" />
    </svg>
  )
);

AlphabetRunesOutlineLogo.displayName = "AlphabetRunesOutlineLogo";

export const AlphabetRunesOutlineLogoMetadata = {
  id: "alphabet-runes-outline",
  baseId: "alphabet-runes-outline",
  variant: "default",
  name: "Alphabet Runes Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetRunesOutlineLogo;
