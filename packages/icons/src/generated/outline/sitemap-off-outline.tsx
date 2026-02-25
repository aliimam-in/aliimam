/**
 * Auto-generated logo component: Sitemap Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SitemapOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SitemapOffOutlineLogo = React.forwardRef<SVGSVGElement, SitemapOffOutlineLogoProps>(
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
      <path d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M19 15a2 2 0 0 1 2 2m-.591 3.42c-.362 .358 -.86 .58 -1.409 .58h-2a2 2 0 0 1 -2 -2v-2c0 -.549 .221 -1.046 .579 -1.407" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2" />
  <path d="M6 15v-1a2 2 0 0 1 2 -2h4m4 0a2 2 0 0 1 2 2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SitemapOffOutlineLogo.displayName = "SitemapOffOutlineLogo";

export const SitemapOffOutlineLogoMetadata = {
  id: "sitemap-off-outline",
  baseId: "sitemap-off-outline",
  variant: "default",
  name: "Sitemap Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SitemapOffOutlineLogo;
