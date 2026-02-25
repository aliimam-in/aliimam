/**
 * Auto-generated logo component: Brand Graphql Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGraphqlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGraphqlOutlineLogo = React.forwardRef<SVGSVGElement, BrandGraphqlOutlineLogoProps>(
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
      <path d="M4 8l8 -5l8 5v8l-8 5l-8 -5l0 -8" />
  <path d="M12 4l7.5 12h-15l7.5 -12" />
  <path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </svg>
  )
);

BrandGraphqlOutlineLogo.displayName = "BrandGraphqlOutlineLogo";

export const BrandGraphqlOutlineLogoMetadata = {
  id: "brand-graphql-outline",
  baseId: "brand-graphql-outline",
  variant: "default",
  name: "Brand Graphql Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGraphqlOutlineLogo;
