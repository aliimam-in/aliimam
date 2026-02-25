/**
 * Auto-generated logo component: Brand Amazon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAmazonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAmazonOutlineLogo = React.forwardRef<SVGSVGElement, BrandAmazonOutlineLogoProps>(
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
      <path d="M17 12.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" />
  <path d="M19.5 15c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" />
    </svg>
  )
);

BrandAmazonOutlineLogo.displayName = "BrandAmazonOutlineLogo";

export const BrandAmazonOutlineLogoMetadata = {
  id: "brand-amazon-outline",
  baseId: "brand-amazon-outline",
  variant: "default",
  name: "Brand Amazon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAmazonOutlineLogo;
