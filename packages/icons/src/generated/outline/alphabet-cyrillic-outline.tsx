/**
 * Auto-generated logo component: Alphabet Cyrillic Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetCyrillicOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetCyrillicOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetCyrillicOutlineLogoProps>(
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
      <path d="M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" />
  <path d="M19 7h-3a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2 -2v-3a2 2 0 0 0 -2 -2h-3" />
    </svg>
  )
);

AlphabetCyrillicOutlineLogo.displayName = "AlphabetCyrillicOutlineLogo";

export const AlphabetCyrillicOutlineLogoMetadata = {
  id: "alphabet-cyrillic-outline",
  baseId: "alphabet-cyrillic-outline",
  variant: "default",
  name: "Alphabet Cyrillic Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetCyrillicOutlineLogo;
