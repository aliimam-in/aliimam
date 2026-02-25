/**
 * Auto-generated logo component: Brand Zeit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandZeitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandZeitOutlineLogo = React.forwardRef<SVGSVGElement, BrandZeitOutlineLogoProps>(
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
      <path d="M3 20h18l-9 -16l-9 16" />
    </svg>
  )
);

BrandZeitOutlineLogo.displayName = "BrandZeitOutlineLogo";

export const BrandZeitOutlineLogoMetadata = {
  id: "brand-zeit-outline",
  baseId: "brand-zeit-outline",
  variant: "default",
  name: "Brand Zeit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandZeitOutlineLogo;
