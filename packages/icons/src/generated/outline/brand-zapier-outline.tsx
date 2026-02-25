/**
 * Auto-generated logo component: Brand Zapier Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandZapierOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandZapierOutlineLogo = React.forwardRef<SVGSVGElement, BrandZapierOutlineLogoProps>(
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
      <path d="M3 12h6" />
  <path d="M21 12h-6" />
  <path d="M12 3v6" />
  <path d="M12 15v6" />
  <path d="M5.636 5.636l4.243 4.243" />
  <path d="M18.364 18.364l-4.243 -4.243" />
  <path d="M18.364 5.636l-4.243 4.243" />
  <path d="M9.879 14.121l-4.243 4.243" />
    </svg>
  )
);

BrandZapierOutlineLogo.displayName = "BrandZapierOutlineLogo";

export const BrandZapierOutlineLogoMetadata = {
  id: "brand-zapier-outline",
  baseId: "brand-zapier-outline",
  variant: "default",
  name: "Brand Zapier Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandZapierOutlineLogo;
