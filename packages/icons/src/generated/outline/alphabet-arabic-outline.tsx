/**
 * Auto-generated logo component: Alphabet Arabic Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetArabicOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetArabicOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetArabicOutlineLogoProps>(
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
      <path d="M10 6v4" />
  <path d="M13 14h8q -2.518 -3 -4 -3" />
  <path d="M13 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1" />
  <path d="M7 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1" />
    </svg>
  )
);

AlphabetArabicOutlineLogo.displayName = "AlphabetArabicOutlineLogo";

export const AlphabetArabicOutlineLogoMetadata = {
  id: "alphabet-arabic-outline",
  baseId: "alphabet-arabic-outline",
  variant: "default",
  name: "Alphabet Arabic Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetArabicOutlineLogo;
