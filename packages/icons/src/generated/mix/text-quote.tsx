/**
 * Auto-generated logo component: Text Quote (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextQuoteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextQuoteLogo = React.forwardRef<SVGSVGElement, TextQuoteLogoProps>(
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
      <path d="M17 5H3" />
  <path d="M21 12H8" />
  <path d="M21 19H8" />
  <path d="M3 12v7" />
    </svg>
  )
);

TextQuoteLogo.displayName = "TextQuoteLogo";

export const TextQuoteLogoMetadata = {
  id: "text-quote",
  baseId: "text-quote",
  variant: "default",
  name: "Text Quote",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextQuoteLogo;
