/**
 * Auto-generated logo component: Alphabet Greek Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetGreekOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetGreekOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetGreekOutlineLogoProps>(
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
      <path d="M10 10v7" />
  <path d="M5 12a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3" />
  <path d="M14 20v-11a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2" />
    </svg>
  )
);

AlphabetGreekOutlineLogo.displayName = "AlphabetGreekOutlineLogo";

export const AlphabetGreekOutlineLogoMetadata = {
  id: "alphabet-greek-outline",
  baseId: "alphabet-greek-outline",
  variant: "default",
  name: "Alphabet Greek Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetGreekOutlineLogo;
