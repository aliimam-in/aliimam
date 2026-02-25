/**
 * Auto-generated logo component: Brand Tripadvisor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTripadvisorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTripadvisorOutlineLogo = React.forwardRef<SVGSVGElement, BrandTripadvisorOutlineLogoProps>(
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
      <path d="M5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M16 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5" />
  <path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5" />
  <path d="M10.5 15.5l1.5 2l1.5 -2" />
  <path d="M9 6.75c2 -.667 4 -.667 6 0" />
    </svg>
  )
);

BrandTripadvisorOutlineLogo.displayName = "BrandTripadvisorOutlineLogo";

export const BrandTripadvisorOutlineLogoMetadata = {
  id: "brand-tripadvisor-outline",
  baseId: "brand-tripadvisor-outline",
  variant: "default",
  name: "Brand Tripadvisor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTripadvisorOutlineLogo;
