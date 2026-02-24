/**
 * Auto-generated logo component: Quote (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QuoteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const QuoteLogo = React.forwardRef<SVGSVGElement, QuoteLogoProps>(
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
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  )
);

QuoteLogo.displayName = "QuoteLogo";

export const QuoteLogoMetadata = {
  id: "quote",
  baseId: "quote",
  variant: "default",
  name: "Quote",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default QuoteLogo;
