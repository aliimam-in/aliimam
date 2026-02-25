/**
 * Auto-generated logo component: Brand Toyota Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandToyotaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandToyotaOutlineLogo = React.forwardRef<SVGSVGElement, BrandToyotaOutlineLogoProps>(
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
      <path d="M2 12a10 7 0 1 0 20 0a10 7 0 1 0 -20 0" />
  <path d="M9 12c0 3.866 1.343 7 3 7s3 -3.134 3 -7s-1.343 -7 -3 -7s-3 3.134 -3 7" />
  <path d="M6.415 6.191c-.888 .503 -1.415 1.13 -1.415 1.809c0 1.657 3.134 3 7 3s7 -1.343 7 -3c0 -.678 -.525 -1.304 -1.41 -1.806" />
    </svg>
  )
);

BrandToyotaOutlineLogo.displayName = "BrandToyotaOutlineLogo";

export const BrandToyotaOutlineLogoMetadata = {
  id: "brand-toyota-outline",
  baseId: "brand-toyota-outline",
  variant: "default",
  name: "Brand Toyota Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandToyotaOutlineLogo;
