/**
 * Auto-generated logo component: Brand Doctrine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDoctrineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDoctrineOutlineLogo = React.forwardRef<SVGSVGElement, BrandDoctrineOutlineLogoProps>(
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
      <path d="M5 14a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M9 14h6" />
  <path d="M12 11l3 3l-3 3" />
  <path d="M10 3l6.9 6" />
    </svg>
  )
);

BrandDoctrineOutlineLogo.displayName = "BrandDoctrineOutlineLogo";

export const BrandDoctrineOutlineLogoMetadata = {
  id: "brand-doctrine-outline",
  baseId: "brand-doctrine-outline",
  variant: "default",
  name: "Brand Doctrine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDoctrineOutlineLogo;
