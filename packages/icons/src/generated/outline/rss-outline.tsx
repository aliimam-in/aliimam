/**
 * Auto-generated logo component: Rss Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RssOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RssOutlineLogo = React.forwardRef<SVGSVGElement, RssOutlineLogoProps>(
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
      <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 4a16 16 0 0 1 16 16" />
  <path d="M4 11a9 9 0 0 1 9 9" />
    </svg>
  )
);

RssOutlineLogo.displayName = "RssOutlineLogo";

export const RssOutlineLogoMetadata = {
  id: "rss-outline",
  baseId: "rss-outline",
  variant: "default",
  name: "Rss Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RssOutlineLogo;
