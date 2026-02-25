/**
 * Auto-generated logo component: Brand Medium Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMediumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMediumOutlineLogo = React.forwardRef<SVGSVGElement, BrandMediumOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M8 9h1l3 3l3 -3h1" />
  <path d="M8 15l2 0" />
  <path d="M14 15l2 0" />
  <path d="M9 9l0 6" />
  <path d="M15 9l0 6" />
    </svg>
  )
);

BrandMediumOutlineLogo.displayName = "BrandMediumOutlineLogo";

export const BrandMediumOutlineLogoMetadata = {
  id: "brand-medium-outline",
  baseId: "brand-medium-outline",
  variant: "default",
  name: "Brand Medium Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMediumOutlineLogo;
