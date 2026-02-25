/**
 * Auto-generated logo component: Brand Cinema 4d Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCinema4dOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCinema4dOutlineLogo = React.forwardRef<SVGSVGElement, BrandCinema4dOutlineLogoProps>(
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
      <path d="M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M17.7 12.137a5.738 5.738 0 1 1 -5.737 -5.737" />
  <path d="M17.7 12.338v-1.175c0 -.47 .171 -.92 .476 -1.253a1.56 1.56 0 0 1 1.149 -.52c.827 0 1.523 .676 1.62 1.573c.037 .344 .055 .69 .055 1.037" />
  <path d="M11.662 6.4h1.175c.47 0 .92 -.176 1.253 -.49c.333 -.314 .52 -.74 .52 -1.184c0 -.852 -.676 -1.57 -1.573 -1.67a9.496 9.496 0 0 0 -1.037 -.056" />
    </svg>
  )
);

BrandCinema4dOutlineLogo.displayName = "BrandCinema4dOutlineLogo";

export const BrandCinema4dOutlineLogoMetadata = {
  id: "brand-cinema-4d-outline",
  baseId: "brand-cinema-4d-outline",
  variant: "default",
  name: "Brand Cinema 4d Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCinema4dOutlineLogo;
