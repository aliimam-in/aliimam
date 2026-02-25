/**
 * Auto-generated logo component: Brand Fortnite Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFortniteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFortniteOutlineLogo = React.forwardRef<SVGSVGElement, BrandFortniteOutlineLogoProps>(
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
      <path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1l0 -18" />
    </svg>
  )
);

BrandFortniteOutlineLogo.displayName = "BrandFortniteOutlineLogo";

export const BrandFortniteOutlineLogoMetadata = {
  id: "brand-fortnite-outline",
  baseId: "brand-fortnite-outline",
  variant: "default",
  name: "Brand Fortnite Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFortniteOutlineLogo;
