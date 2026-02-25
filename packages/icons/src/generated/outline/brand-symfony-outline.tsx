/**
 * Auto-generated logo component: Brand Symfony Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSymfonyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSymfonyOutlineLogo = React.forwardRef<SVGSVGElement, BrandSymfonyOutlineLogoProps>(
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
      <path d="M6 13c.458 .667 1.125 1 2 1c1.313 0 2 -.875 2 -1.5c0 -1.5 -2 -1 -2 -2c0 -.625 .516 -1.5 1.5 -1.5c2.5 0 1.563 2 5.5 2c.667 0 1 -.333 1 -1" />
  <path d="M9 17c-.095 .667 .238 1 1 1c1.714 0 2.714 -2 3 -6c.286 -4 1.571 -6 3 -6c.571 0 .905 .333 1 1" />
  <path d="M22 12c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10a10 10 0 0 1 10 10" />
    </svg>
  )
);

BrandSymfonyOutlineLogo.displayName = "BrandSymfonyOutlineLogo";

export const BrandSymfonyOutlineLogoMetadata = {
  id: "brand-symfony-outline",
  baseId: "brand-symfony-outline",
  variant: "default",
  name: "Brand Symfony Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSymfonyOutlineLogo;
