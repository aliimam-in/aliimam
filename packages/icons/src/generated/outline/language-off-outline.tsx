/**
 * Auto-generated logo component: Language Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LanguageOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LanguageOffOutlineLogo = React.forwardRef<SVGSVGElement, LanguageOffOutlineLogoProps>(
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
      <path d="M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8" />
  <path d="M18 18h-5.1" />
  <path d="M8.747 8.748c-.66 2.834 -2.536 4.252 -4.747 4.252" />
  <path d="M4 6.371l2.371 0" />
  <path d="M5 9c0 2.144 2.252 3.908 6 4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LanguageOffOutlineLogo.displayName = "LanguageOffOutlineLogo";

export const LanguageOffOutlineLogoMetadata = {
  id: "language-off-outline",
  baseId: "language-off-outline",
  variant: "default",
  name: "Language Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LanguageOffOutlineLogo;
