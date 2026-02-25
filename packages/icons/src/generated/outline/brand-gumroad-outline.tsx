/**
 * Auto-generated logo component: Brand Gumroad Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGumroadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGumroadOutlineLogo = React.forwardRef<SVGSVGElement, BrandGumroadOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
  <path d="M13.5 13h2.5v3" />
  <path d="M15.024 9.382a4 4 0 1 0 -3.024 6.618c1.862 0 2.554 -1.278 3 -3" />
    </svg>
  )
);

BrandGumroadOutlineLogo.displayName = "BrandGumroadOutlineLogo";

export const BrandGumroadOutlineLogoMetadata = {
  id: "brand-gumroad-outline",
  baseId: "brand-gumroad-outline",
  variant: "default",
  name: "Brand Gumroad Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGumroadOutlineLogo;
