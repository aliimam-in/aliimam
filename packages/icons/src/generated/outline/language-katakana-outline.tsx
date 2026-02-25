/**
 * Auto-generated logo component: Language Katakana Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LanguageKatakanaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LanguageKatakanaOutlineLogo = React.forwardRef<SVGSVGElement, LanguageKatakanaOutlineLogoProps>(
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
      <path d="M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" />
  <path d="M8 8c0 1.5 .5 3 -2 5" />
  <path d="M12 20l4 -9l4 9" />
  <path d="M19.1 18h-6.2" />
    </svg>
  )
);

LanguageKatakanaOutlineLogo.displayName = "LanguageKatakanaOutlineLogo";

export const LanguageKatakanaOutlineLogoMetadata = {
  id: "language-katakana-outline",
  baseId: "language-katakana-outline",
  variant: "default",
  name: "Language Katakana Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LanguageKatakanaOutlineLogo;
