/**
 * Auto-generated logo component: Brand Framer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFramerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFramerOutlineLogo = React.forwardRef<SVGSVGElement, BrandFramerOutlineLogoProps>(
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
      <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
    </svg>
  )
);

BrandFramerOutlineLogo.displayName = "BrandFramerOutlineLogo";

export const BrandFramerOutlineLogoMetadata = {
  id: "brand-framer-outline",
  baseId: "brand-framer-outline",
  variant: "default",
  name: "Brand Framer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFramerOutlineLogo;
