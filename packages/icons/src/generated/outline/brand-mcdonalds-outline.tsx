/**
 * Auto-generated logo component: Brand Mcdonalds Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMcdonaldsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMcdonaldsOutlineLogo = React.forwardRef<SVGSVGElement, BrandMcdonaldsOutlineLogoProps>(
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
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  )
);

BrandMcdonaldsOutlineLogo.displayName = "BrandMcdonaldsOutlineLogo";

export const BrandMcdonaldsOutlineLogoMetadata = {
  id: "brand-mcdonalds-outline",
  baseId: "brand-mcdonalds-outline",
  variant: "default",
  name: "Brand Mcdonalds Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMcdonaldsOutlineLogo;
