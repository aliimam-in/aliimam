/**
 * Auto-generated logo component: Text Grammar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextGrammarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextGrammarOutlineLogo = React.forwardRef<SVGSVGElement, TextGrammarOutlineLogoProps>(
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
      <path d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M4 12v-5a3 3 0 1 1 6 0v5" />
  <path d="M4 9h6" />
  <path d="M20 6v6" />
  <path d="M4 16h12" />
  <path d="M4 20h6" />
  <path d="M14 20l2 2l5 -5" />
    </svg>
  )
);

TextGrammarOutlineLogo.displayName = "TextGrammarOutlineLogo";

export const TextGrammarOutlineLogoMetadata = {
  id: "text-grammar-outline",
  baseId: "text-grammar-outline",
  variant: "default",
  name: "Text Grammar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextGrammarOutlineLogo;
