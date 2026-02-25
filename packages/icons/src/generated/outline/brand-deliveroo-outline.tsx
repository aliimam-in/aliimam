/**
 * Auto-generated logo component: Brand Deliveroo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDeliverooOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDeliverooOutlineLogo = React.forwardRef<SVGSVGElement, BrandDeliverooOutlineLogoProps>(
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
      <path d="M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1l2 7.5" />
  <path d="M14.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="currentColor" />
  <path d="M10.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="currentColor" />
    </svg>
  )
);

BrandDeliverooOutlineLogo.displayName = "BrandDeliverooOutlineLogo";

export const BrandDeliverooOutlineLogoMetadata = {
  id: "brand-deliveroo-outline",
  baseId: "brand-deliveroo-outline",
  variant: "default",
  name: "Brand Deliveroo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDeliverooOutlineLogo;
