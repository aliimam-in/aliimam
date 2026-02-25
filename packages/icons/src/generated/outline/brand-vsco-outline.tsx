/**
 * Auto-generated logo component: Brand Vsco Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVscoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVscoOutlineLogo = React.forwardRef<SVGSVGElement, BrandVscoOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
  <path d="M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0" />
  <path d="M12 3v4" />
  <path d="M21 12h-4" />
  <path d="M12 21v-4" />
  <path d="M3 12h4" />
  <path d="M18.364 5.636l-2.828 2.828" />
  <path d="M18.364 18.364l-2.828 -2.828" />
  <path d="M5.636 18.364l2.828 -2.828" />
  <path d="M5.636 5.636l2.828 2.828" />
    </svg>
  )
);

BrandVscoOutlineLogo.displayName = "BrandVscoOutlineLogo";

export const BrandVscoOutlineLogoMetadata = {
  id: "brand-vsco-outline",
  baseId: "brand-vsco-outline",
  variant: "default",
  name: "Brand Vsco Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVscoOutlineLogo;
