/**
 * Auto-generated logo component: Brand Backbone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBackboneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBackboneOutlineLogo = React.forwardRef<SVGSVGElement, BrandBackboneOutlineLogoProps>(
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
      <path d="M5 20l14 -8l-14 -8l0 16" />
  <path d="M19 20l-14 -8l14 -8l0 16" />
    </svg>
  )
);

BrandBackboneOutlineLogo.displayName = "BrandBackboneOutlineLogo";

export const BrandBackboneOutlineLogoMetadata = {
  id: "brand-backbone-outline",
  baseId: "brand-backbone-outline",
  variant: "default",
  name: "Brand Backbone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBackboneOutlineLogo;
