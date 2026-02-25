/**
 * Auto-generated logo component: Language Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LanguageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LanguageOutlineLogo = React.forwardRef<SVGSVGElement, LanguageOutlineLogoProps>(
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
      <path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629" />
  <path d="M4 6.371h7" />
  <path d="M5 9c0 2.144 2.252 3.908 6 4" />
  <path d="M12 20l4 -9l4 9" />
  <path d="M19.1 18h-6.2" />
  <path d="M6.694 3l.793 .582" />
    </svg>
  )
);

LanguageOutlineLogo.displayName = "LanguageOutlineLogo";

export const LanguageOutlineLogoMetadata = {
  id: "language-outline",
  baseId: "language-outline",
  variant: "default",
  name: "Language Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LanguageOutlineLogo;
