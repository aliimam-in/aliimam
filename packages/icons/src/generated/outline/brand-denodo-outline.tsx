/**
 * Auto-generated logo component: Brand Denodo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDenodoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDenodoOutlineLogo = React.forwardRef<SVGSVGElement, BrandDenodoOutlineLogoProps>(
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
      <path d="M11 11h2v2h-2l0 -2" />
  <path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732" />
  <path d="M11 19h2v2h-2l0 -2" />
  <path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1l1 -1.732" />
  <path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732" />
  <path d="M11 3h2v2h-2l0 -2" />
  <path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732l-1.732 -1" />
    </svg>
  )
);

BrandDenodoOutlineLogo.displayName = "BrandDenodoOutlineLogo";

export const BrandDenodoOutlineLogoMetadata = {
  id: "brand-denodo-outline",
  baseId: "brand-denodo-outline",
  variant: "default",
  name: "Brand Denodo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDenodoOutlineLogo;
