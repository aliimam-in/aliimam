/**
 * Auto-generated logo component: Brand Wordpress Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWordpressOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWordpressOutlineLogo = React.forwardRef<SVGSVGElement, BrandWordpressOutlineLogoProps>(
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
      <path d="M9.5 9h3" />
  <path d="M4 9h2.5" />
  <path d="M11 9l3 11l4 -9" />
  <path d="M5.5 9l3.5 11l3 -7" />
  <path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

BrandWordpressOutlineLogo.displayName = "BrandWordpressOutlineLogo";

export const BrandWordpressOutlineLogoMetadata = {
  id: "brand-wordpress-outline",
  baseId: "brand-wordpress-outline",
  variant: "default",
  name: "Brand Wordpress Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWordpressOutlineLogo;
