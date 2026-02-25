/**
 * Auto-generated logo component: Brand Dolby Digital Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDolbyDigitalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDolbyDigitalOutlineLogo = React.forwardRef<SVGSVGElement, BrandDolbyDigitalOutlineLogoProps>(
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
      <path d="M21 6v12h-.89c-3.34 0 -6.047 -2.686 -6.047 -6s2.707 -6 6.046 -6h.891" />
  <path d="M3.063 6v12h.891c3.34 0 6.046 -2.686 6.046 -6s-2.707 -6 -6.046 -6h-.89" />
    </svg>
  )
);

BrandDolbyDigitalOutlineLogo.displayName = "BrandDolbyDigitalOutlineLogo";

export const BrandDolbyDigitalOutlineLogoMetadata = {
  id: "brand-dolby-digital-outline",
  baseId: "brand-dolby-digital-outline",
  variant: "default",
  name: "Brand Dolby Digital Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDolbyDigitalOutlineLogo;
