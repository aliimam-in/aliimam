/**
 * Auto-generated logo component: Brand Douban Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDoubanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDoubanOutlineLogo = React.forwardRef<SVGSVGElement, BrandDoubanOutlineLogoProps>(
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
      <path d="M4 20h16" />
  <path d="M5 4h14" />
  <path d="M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2" />
  <path d="M16 14l-2 6" />
  <path d="M8 17l1 3" />
    </svg>
  )
);

BrandDoubanOutlineLogo.displayName = "BrandDoubanOutlineLogo";

export const BrandDoubanOutlineLogoMetadata = {
  id: "brand-douban-outline",
  baseId: "brand-douban-outline",
  variant: "default",
  name: "Brand Douban Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDoubanOutlineLogo;
