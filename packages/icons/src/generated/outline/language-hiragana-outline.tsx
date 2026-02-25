/**
 * Auto-generated logo component: Language Hiragana Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LanguageHiraganaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LanguageHiraganaOutlineLogo = React.forwardRef<SVGSVGElement, LanguageHiraganaOutlineLogoProps>(
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
      <path d="M4 5h7" />
  <path d="M7 4c0 4.846 0 7 .5 8" />
  <path d="M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143" />
  <path d="M12 20l4 -9l4 9" />
  <path d="M19.1 18h-6.2" />
    </svg>
  )
);

LanguageHiraganaOutlineLogo.displayName = "LanguageHiraganaOutlineLogo";

export const LanguageHiraganaOutlineLogoMetadata = {
  id: "language-hiragana-outline",
  baseId: "language-hiragana-outline",
  variant: "default",
  name: "Language Hiragana Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LanguageHiraganaOutlineLogo;
