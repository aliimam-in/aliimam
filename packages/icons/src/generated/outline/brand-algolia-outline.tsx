/**
 * Auto-generated logo component: Brand Algolia Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAlgoliaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAlgoliaOutlineLogo = React.forwardRef<SVGSVGElement, BrandAlgoliaOutlineLogoProps>(
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
      <path d="M15.5 11c-.414 -1.477 -1.886 -2.5 -3.5 -2.5a3.47 3.47 0 0 0 -3.5 3.5a3.47 3.47 0 0 0 3.5 3.5c.974 0 1.861 -.357 2.5 -1l4.5 4.5v-15h-7c-4.386 0 -8 3.582 -8 8s3.614 8 8 8a7.577 7.577 0 0 0 2.998 -.614" />
    </svg>
  )
);

BrandAlgoliaOutlineLogo.displayName = "BrandAlgoliaOutlineLogo";

export const BrandAlgoliaOutlineLogoMetadata = {
  id: "brand-algolia-outline",
  baseId: "brand-algolia-outline",
  variant: "default",
  name: "Brand Algolia Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAlgoliaOutlineLogo;
