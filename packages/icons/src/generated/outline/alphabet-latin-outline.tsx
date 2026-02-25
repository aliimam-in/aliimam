/**
 * Auto-generated logo component: Alphabet Latin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetLatinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetLatinOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetLatinOutlineLogoProps>(
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
  <path d="M14 7v10" />
  <path d="M14 12a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3" />
    </svg>
  )
);

AlphabetLatinOutlineLogo.displayName = "AlphabetLatinOutlineLogo";

export const AlphabetLatinOutlineLogoMetadata = {
  id: "alphabet-latin-outline",
  baseId: "alphabet-latin-outline",
  variant: "default",
  name: "Alphabet Latin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetLatinOutlineLogo;
