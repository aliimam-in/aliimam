/**
 * Auto-generated logo component: Brand Paypay Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPaypayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPaypayOutlineLogo = React.forwardRef<SVGSVGElement, BrandPaypayOutlineLogoProps>(
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
      <path d="M6.375 21l3.938 -13.838" />
  <path d="M3 6c16.731 0 21.231 9.881 4.5 11" />
  <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2" />
    </svg>
  )
);

BrandPaypayOutlineLogo.displayName = "BrandPaypayOutlineLogo";

export const BrandPaypayOutlineLogoMetadata = {
  id: "brand-paypay-outline",
  baseId: "brand-paypay-outline",
  variant: "default",
  name: "Brand Paypay Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPaypayOutlineLogo;
