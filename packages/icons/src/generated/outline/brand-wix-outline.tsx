/**
 * Auto-generated logo component: Brand Wix Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWixOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWixOutlineLogo = React.forwardRef<SVGSVGElement, BrandWixOutlineLogoProps>(
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
      <path d="M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" />
  <path d="M13 11.5v3.5" />
  <path d="M16 9l5 6" />
  <path d="M21 9l-5 6" />
  <path d="M13 9h.01" />
    </svg>
  )
);

BrandWixOutlineLogo.displayName = "BrandWixOutlineLogo";

export const BrandWixOutlineLogoMetadata = {
  id: "brand-wix-outline",
  baseId: "brand-wix-outline",
  variant: "default",
  name: "Brand Wix Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWixOutlineLogo;
