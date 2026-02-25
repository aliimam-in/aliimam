/**
 * Auto-generated logo component: Brand Electronic Arts Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandElectronicArtsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandElectronicArtsOutlineLogo = React.forwardRef<SVGSVGElement, BrandElectronicArtsOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" />
  <path d="M17 14h-2" />
  <path d="M6.5 12h3.5" />
  <path d="M8 9h3" />
    </svg>
  )
);

BrandElectronicArtsOutlineLogo.displayName = "BrandElectronicArtsOutlineLogo";

export const BrandElectronicArtsOutlineLogoMetadata = {
  id: "brand-electronic-arts-outline",
  baseId: "brand-electronic-arts-outline",
  variant: "default",
  name: "Brand Electronic Arts Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandElectronicArtsOutlineLogo;
