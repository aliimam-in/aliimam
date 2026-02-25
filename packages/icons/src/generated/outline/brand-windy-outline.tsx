/**
 * Auto-generated logo component: Brand Windy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWindyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWindyOutlineLogo = React.forwardRef<SVGSVGElement, BrandWindyOutlineLogoProps>(
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
      <path d="M9 4c0 5.5 -.33 16 4 16s7.546 -11.27 8 -13" />
  <path d="M3 4c.253 5.44 1.449 16 5.894 16c4.444 0 8.42 -10.036 9.106 -14" />
    </svg>
  )
);

BrandWindyOutlineLogo.displayName = "BrandWindyOutlineLogo";

export const BrandWindyOutlineLogoMetadata = {
  id: "brand-windy-outline",
  baseId: "brand-windy-outline",
  variant: "default",
  name: "Brand Windy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWindyOutlineLogo;
