/**
 * Auto-generated logo component: Brand Printables Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPrintablesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPrintablesOutlineLogo = React.forwardRef<SVGSVGElement, BrandPrintablesOutlineLogoProps>(
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
      <path d="M6 21l12 -7v-7.5l-6 -3.5l-6 3.5l6 3.5v7.5l-6 -3.5l0 7" />
    </svg>
  )
);

BrandPrintablesOutlineLogo.displayName = "BrandPrintablesOutlineLogo";

export const BrandPrintablesOutlineLogoMetadata = {
  id: "brand-printables-outline",
  baseId: "brand-printables-outline",
  variant: "default",
  name: "Brand Printables Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPrintablesOutlineLogo;
