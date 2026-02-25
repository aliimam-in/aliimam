/**
 * Auto-generated logo component: Brand Producthunt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandProducthuntOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandProducthuntOutlineLogo = React.forwardRef<SVGSVGElement, BrandProducthuntOutlineLogoProps>(
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
      <path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

BrandProducthuntOutlineLogo.displayName = "BrandProducthuntOutlineLogo";

export const BrandProducthuntOutlineLogoMetadata = {
  id: "brand-producthunt-outline",
  baseId: "brand-producthunt-outline",
  variant: "default",
  name: "Brand Producthunt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandProducthuntOutlineLogo;
