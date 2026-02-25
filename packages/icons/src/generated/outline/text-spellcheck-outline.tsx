/**
 * Auto-generated logo component: Text Spellcheck Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextSpellcheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextSpellcheckOutlineLogo = React.forwardRef<SVGSVGElement, TextSpellcheckOutlineLogoProps>(
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
      <path d="M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5" />
  <path d="M5 10h7" />
  <path d="M10 18l3 3l7 -7" />
    </svg>
  )
);

TextSpellcheckOutlineLogo.displayName = "TextSpellcheckOutlineLogo";

export const TextSpellcheckOutlineLogoMetadata = {
  id: "text-spellcheck-outline",
  baseId: "text-spellcheck-outline",
  variant: "default",
  name: "Text Spellcheck Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextSpellcheckOutlineLogo;
