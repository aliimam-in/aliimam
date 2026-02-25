/**
 * Auto-generated logo component: Alphabet Korean Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetKoreanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetKoreanOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetKoreanOutlineLogoProps>(
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
      <path d="M7 7h6c0 2.5 -1.593 8.474 -6 10" />
  <path d="M16 5v14l0 -14" />
  <path d="M16 12h2" />
    </svg>
  )
);

AlphabetKoreanOutlineLogo.displayName = "AlphabetKoreanOutlineLogo";

export const AlphabetKoreanOutlineLogoMetadata = {
  id: "alphabet-korean-outline",
  baseId: "alphabet-korean-outline",
  variant: "default",
  name: "Alphabet Korean Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetKoreanOutlineLogo;
