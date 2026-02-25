/**
 * Auto-generated logo component: Quote Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QuoteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const QuoteOutlineLogo = React.forwardRef<SVGSVGElement, QuoteOutlineLogoProps>(
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
      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
  <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
    </svg>
  )
);

QuoteOutlineLogo.displayName = "QuoteOutlineLogo";

export const QuoteOutlineLogoMetadata = {
  id: "quote-outline",
  baseId: "quote-outline",
  variant: "default",
  name: "Quote Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default QuoteOutlineLogo;
