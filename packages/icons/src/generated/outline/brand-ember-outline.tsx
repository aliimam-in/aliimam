/**
 * Auto-generated logo component: Brand Ember Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandEmberOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandEmberOutlineLogo = React.forwardRef<SVGSVGElement, BrandEmberOutlineLogoProps>(
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
      <path d="M3 12.958c8.466 1.647 11.112 -1.196 12.17 -2.294c2.116 -2.196 0 -6.589 -2.646 -5.49c-2.644 1.096 -6.35 7.686 -3.174 12.078c2.116 2.928 6 2.178 11.65 -2.252" />
    </svg>
  )
);

BrandEmberOutlineLogo.displayName = "BrandEmberOutlineLogo";

export const BrandEmberOutlineLogoMetadata = {
  id: "brand-ember-outline",
  baseId: "brand-ember-outline",
  variant: "default",
  name: "Brand Ember Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandEmberOutlineLogo;
