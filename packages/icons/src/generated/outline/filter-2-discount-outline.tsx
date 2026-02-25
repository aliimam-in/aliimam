/**
 * Auto-generated logo component: Filter 2 Discount Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2DiscountOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2DiscountOutlineLogo = React.forwardRef<SVGSVGElement, Filter2DiscountOutlineLogoProps>(
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
      <path d="M4 6h16" />
  <path d="M6 12h12" />
  <path d="M9 18h3" />
  <path d="M16 16v.01" />
  <path d="M16 21l5 -5" />
  <path d="M21 21v.01" />
    </svg>
  )
);

Filter2DiscountOutlineLogo.displayName = "Filter2DiscountOutlineLogo";

export const Filter2DiscountOutlineLogoMetadata = {
  id: "filter-2-discount-outline",
  baseId: "filter-2-discount-outline",
  variant: "default",
  name: "Filter 2 Discount Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2DiscountOutlineLogo;
