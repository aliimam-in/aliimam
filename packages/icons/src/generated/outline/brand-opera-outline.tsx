/**
 * Auto-generated logo component: Brand Opera Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOperaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOperaOutlineLogo = React.forwardRef<SVGSVGElement, BrandOperaOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12a3 5 0 1 0 6 0a3 5 0 1 0 -6 0" />
    </svg>
  )
);

BrandOperaOutlineLogo.displayName = "BrandOperaOutlineLogo";

export const BrandOperaOutlineLogoMetadata = {
  id: "brand-opera-outline",
  baseId: "brand-opera-outline",
  variant: "default",
  name: "Brand Opera Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOperaOutlineLogo;
