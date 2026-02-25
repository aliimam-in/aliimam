/**
 * Auto-generated logo component: Brand Grammarly Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGrammarlyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGrammarlyOutlineLogo = React.forwardRef<SVGSVGElement, BrandGrammarlyOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M15.697 9.434a4.5 4.5 0 1 0 .217 4.788" />
  <path d="M13.5 14h2.5v2.5" />
    </svg>
  )
);

BrandGrammarlyOutlineLogo.displayName = "BrandGrammarlyOutlineLogo";

export const BrandGrammarlyOutlineLogoMetadata = {
  id: "brand-grammarly-outline",
  baseId: "brand-grammarly-outline",
  variant: "default",
  name: "Brand Grammarly Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGrammarlyOutlineLogo;
