/**
 * Auto-generated logo component: Brand Npm Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNpmOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNpmOutlineLogo = React.forwardRef<SVGSVGElement, BrandNpmOutlineLogoProps>(
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
      <path d="M1 8h22v7h-12v2h-4v-2h-6l0 -7" />
  <path d="M7 8v7" />
  <path d="M14 8v7" />
  <path d="M17 11v4" />
  <path d="M4 11v4" />
  <path d="M11 11v1" />
  <path d="M20 11v4" />
    </svg>
  )
);

BrandNpmOutlineLogo.displayName = "BrandNpmOutlineLogo";

export const BrandNpmOutlineLogoMetadata = {
  id: "brand-npm-outline",
  baseId: "brand-npm-outline",
  variant: "default",
  name: "Brand Npm Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNpmOutlineLogo;
