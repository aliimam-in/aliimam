/**
 * Auto-generated logo component: Seo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SeoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SeoOutlineLogo = React.forwardRef<SVGSVGElement, SeoOutlineLogoProps>(
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
      <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
  <path d="M14 16h-4v-8h4" />
  <path d="M11 12h2" />
  <path d="M17 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -6" />
    </svg>
  )
);

SeoOutlineLogo.displayName = "SeoOutlineLogo";

export const SeoOutlineLogoMetadata = {
  id: "seo-outline",
  baseId: "seo-outline",
  variant: "default",
  name: "Seo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SeoOutlineLogo;
