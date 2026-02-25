/**
 * Auto-generated logo component: Brand Filezilla Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFilezillaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFilezillaOutlineLogo = React.forwardRef<SVGSVGElement, BrandFilezillaOutlineLogoProps>(
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
      <path d="M16 15.824a4.062 4.062 0 0 1 -2.25 .033c-.738 -.201 -2.018 -.08 -2.75 .143l4.583 -5h-6.583" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M8 15l2 -8h5" />
    </svg>
  )
);

BrandFilezillaOutlineLogo.displayName = "BrandFilezillaOutlineLogo";

export const BrandFilezillaOutlineLogoMetadata = {
  id: "brand-filezilla-outline",
  baseId: "brand-filezilla-outline",
  variant: "default",
  name: "Brand Filezilla Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFilezillaOutlineLogo;
