/**
 * Auto-generated logo component: Brand Dcos Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDcosOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDcosOutlineLogo = React.forwardRef<SVGSVGElement, BrandDcosOutlineLogoProps>(
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
      <path d="M3 18l18 -12h-18l9 14l9 -14v10l-18 -10l0 12" />
    </svg>
  )
);

BrandDcosOutlineLogo.displayName = "BrandDcosOutlineLogo";

export const BrandDcosOutlineLogoMetadata = {
  id: "brand-dcos-outline",
  baseId: "brand-dcos-outline",
  variant: "default",
  name: "Brand Dcos Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDcosOutlineLogo;
