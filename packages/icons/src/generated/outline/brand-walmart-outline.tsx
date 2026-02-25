/**
 * Auto-generated logo component: Brand Walmart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWalmartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWalmartOutlineLogo = React.forwardRef<SVGSVGElement, BrandWalmartOutlineLogoProps>(
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
      <path d="M12 8.04v-5.04" />
  <path d="M15.5 10l4.5 -2.5" />
  <path d="M15.5 14l4.5 2.5" />
  <path d="M12 15.96v5.04" />
  <path d="M8.5 14l-4.5 2.5" />
  <path d="M8.5 10l-4.5 -2.505" />
    </svg>
  )
);

BrandWalmartOutlineLogo.displayName = "BrandWalmartOutlineLogo";

export const BrandWalmartOutlineLogoMetadata = {
  id: "brand-walmart-outline",
  baseId: "brand-walmart-outline",
  variant: "default",
  name: "Brand Walmart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWalmartOutlineLogo;
