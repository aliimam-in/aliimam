/**
 * Auto-generated logo component: Brand Cypress Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCypressOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCypressOutlineLogo = React.forwardRef<SVGSVGElement, BrandCypressOutlineLogoProps>(
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
      <path d="M19.48 17.007a9 9 0 1 0 -7.48 3.993c.896 0 1.691 -.573 1.974 -1.423l3.526 -10.577" />
  <path d="M13.5 9l2 6" />
  <path d="M10.764 9.411a3 3 0 1 0 -.023 5.19" />
    </svg>
  )
);

BrandCypressOutlineLogo.displayName = "BrandCypressOutlineLogo";

export const BrandCypressOutlineLogoMetadata = {
  id: "brand-cypress-outline",
  baseId: "brand-cypress-outline",
  variant: "default",
  name: "Brand Cypress Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCypressOutlineLogo;
