/**
 * Auto-generated logo component: Brand Mantine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMantineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMantineOutlineLogo = React.forwardRef<SVGSVGElement, BrandMantineOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4" />
  <path d="M14 9h-2" />
  <path d="M14 15h-2" />
  <path d="M10 12h.01" />
    </svg>
  )
);

BrandMantineOutlineLogo.displayName = "BrandMantineOutlineLogo";

export const BrandMantineOutlineLogoMetadata = {
  id: "brand-mantine-outline",
  baseId: "brand-mantine-outline",
  variant: "default",
  name: "Brand Mantine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMantineOutlineLogo;
