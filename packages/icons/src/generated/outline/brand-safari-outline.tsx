/**
 * Auto-generated logo component: Brand Safari Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSafariOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSafariOutlineLogo = React.forwardRef<SVGSVGElement, BrandSafariOutlineLogoProps>(
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
      <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

BrandSafariOutlineLogo.displayName = "BrandSafariOutlineLogo";

export const BrandSafariOutlineLogoMetadata = {
  id: "brand-safari-outline",
  baseId: "brand-safari-outline",
  variant: "default",
  name: "Brand Safari Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSafariOutlineLogo;
