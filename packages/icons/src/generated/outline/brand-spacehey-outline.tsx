/**
 * Auto-generated logo component: Brand Spacehey Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSpaceheyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSpaceheyOutlineLogo = React.forwardRef<SVGSVGElement, BrandSpaceheyOutlineLogoProps>(
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
      <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 20h6v-6a3 3 0 0 0 -6 0v6" />
  <path d="M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4" />
    </svg>
  )
);

BrandSpaceheyOutlineLogo.displayName = "BrandSpaceheyOutlineLogo";

export const BrandSpaceheyOutlineLogoMetadata = {
  id: "brand-spacehey-outline",
  baseId: "brand-spacehey-outline",
  variant: "default",
  name: "Brand Spacehey Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSpaceheyOutlineLogo;
