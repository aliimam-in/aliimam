/**
 * Auto-generated logo component: Quotes Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QuotesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const QuotesOutlineLogo = React.forwardRef<SVGSVGElement, QuotesOutlineLogoProps>(
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
      <path d="M4 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
  <path d="M8 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
  <path d="M16 18c1.333 -1.854 1.333 -4.146 0 -6" />
  <path d="M20 18c1.333 -1.854 1.333 -4.146 0 -6" />
    </svg>
  )
);

QuotesOutlineLogo.displayName = "QuotesOutlineLogo";

export const QuotesOutlineLogoMetadata = {
  id: "quotes-outline",
  baseId: "quotes-outline",
  variant: "default",
  name: "Quotes Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default QuotesOutlineLogo;
