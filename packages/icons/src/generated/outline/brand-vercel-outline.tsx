/**
 * Auto-generated logo component: Brand Vercel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVercelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVercelOutlineLogo = React.forwardRef<SVGSVGElement, BrandVercelOutlineLogoProps>(
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
      <path d="M3 19h18l-9 -15l-9 15" />
    </svg>
  )
);

BrandVercelOutlineLogo.displayName = "BrandVercelOutlineLogo";

export const BrandVercelOutlineLogoMetadata = {
  id: "brand-vercel-outline",
  baseId: "brand-vercel-outline",
  variant: "default",
  name: "Brand Vercel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVercelOutlineLogo;
