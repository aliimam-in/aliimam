/**
 * Auto-generated logo component: Brand Radix Ui Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandRadixUiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandRadixUiOutlineLogo = React.forwardRef<SVGSVGElement, BrandRadixUiOutlineLogoProps>(
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
      <path d="M14 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M6 3h5v5h-5l0 -5" />
  <path d="M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005" />
    </svg>
  )
);

BrandRadixUiOutlineLogo.displayName = "BrandRadixUiOutlineLogo";

export const BrandRadixUiOutlineLogoMetadata = {
  id: "brand-radix-ui-outline",
  baseId: "brand-radix-ui-outline",
  variant: "default",
  name: "Brand Radix Ui Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandRadixUiOutlineLogo;
