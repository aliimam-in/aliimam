/**
 * Auto-generated logo component: Brand Crunchbase Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCrunchbaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCrunchbaseOutlineLogo = React.forwardRef<SVGSVGElement, BrandCrunchbaseOutlineLogoProps>(
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
      <path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2" />
  <path d="M10.414 11.586a2 2 0 1 0 0 2.828" />
  <path d="M13 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M13 7v6" />
    </svg>
  )
);

BrandCrunchbaseOutlineLogo.displayName = "BrandCrunchbaseOutlineLogo";

export const BrandCrunchbaseOutlineLogoMetadata = {
  id: "brand-crunchbase-outline",
  baseId: "brand-crunchbase-outline",
  variant: "default",
  name: "Brand Crunchbase Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCrunchbaseOutlineLogo;
