/**
 * Auto-generated logo component: Brand Open Source Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOpenSourceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOpenSourceOutlineLogo = React.forwardRef<SVGSVGElement, BrandOpenSourceOutlineLogoProps>(
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
      <path d="M12 3a9 9 0 0 1 3.618 17.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603a9 9 0 0 1 3.617 -17.244" />
    </svg>
  )
);

BrandOpenSourceOutlineLogo.displayName = "BrandOpenSourceOutlineLogo";

export const BrandOpenSourceOutlineLogoMetadata = {
  id: "brand-open-source-outline",
  baseId: "brand-open-source-outline",
  variant: "default",
  name: "Brand Open Source Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOpenSourceOutlineLogo;
