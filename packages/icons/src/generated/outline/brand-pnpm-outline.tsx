/**
 * Auto-generated logo component: Brand Pnpm Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPnpmOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPnpmOutlineLogo = React.forwardRef<SVGSVGElement, BrandPnpmOutlineLogoProps>(
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
      <path d="M3 17h4v4h-4l0 -4" />
  <path d="M10 17h4v4h-4l0 -4" />
  <path d="M17 17h4v4h-4l0 -4" />
  <path d="M17 10h4v4h-4l0 -4" />
  <path d="M17 3h4v4h-4l0 -4" />
  <path d="M10 10h4v4h-4l0 -4" />
  <path d="M10 3h4v4h-4l0 -4" />
  <path d="M3 3h4v4h-4l0 -4" />
    </svg>
  )
);

BrandPnpmOutlineLogo.displayName = "BrandPnpmOutlineLogo";

export const BrandPnpmOutlineLogoMetadata = {
  id: "brand-pnpm-outline",
  baseId: "brand-pnpm-outline",
  variant: "default",
  name: "Brand Pnpm Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPnpmOutlineLogo;
