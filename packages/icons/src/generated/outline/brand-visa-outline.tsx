/**
 * Auto-generated logo component: Brand Visa Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVisaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVisaOutlineLogo = React.forwardRef<SVGSVGElement, BrandVisaOutlineLogoProps>(
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
      <path d="M21 15l-1 -6l-2.5 6" />
  <path d="M9 15l1 -6" />
  <path d="M3 9h1v6h.5l2.5 -6" />
  <path d="M16 9.5a.5 .5 0 0 0 -.5 -.5h-.75c-.721 0 -1.337 .521 -1.455 1.233l-.09 .534a1.059 1.059 0 0 0 1.045 1.233a1.059 1.059 0 0 1 1.045 1.233l-.09 .534a1.476 1.476 0 0 1 -1.455 1.233h-.75a.5 .5 0 0 1 -.5 -.5" />
  <path d="M18 14h2.7" />
    </svg>
  )
);

BrandVisaOutlineLogo.displayName = "BrandVisaOutlineLogo";

export const BrandVisaOutlineLogoMetadata = {
  id: "brand-visa-outline",
  baseId: "brand-visa-outline",
  variant: "default",
  name: "Brand Visa Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVisaOutlineLogo;
