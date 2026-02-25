/**
 * Auto-generated logo component: Brand Netease Music Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNeteaseMusicOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNeteaseMusicOutlineLogo = React.forwardRef<SVGSVGElement, BrandNeteaseMusicOutlineLogoProps>(
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
      <path d="M9 4c-2.93 1.346 -5 5.046 -5 8.492c0 4.508 4 7.508 8 7.508c4 0 8 -3 8 -7c0 -3.513 -3.5 -5.513 -6 -5.513c-2.5 0 -5 1.513 -5 4.513c0 2 1.5 3 3 3c1.5 0 3 -1 3 -3c0 -3.513 -2 -4.508 -2 -6.515c0 -3.504 3.5 -2.603 4 -1.502" />
    </svg>
  )
);

BrandNeteaseMusicOutlineLogo.displayName = "BrandNeteaseMusicOutlineLogo";

export const BrandNeteaseMusicOutlineLogoMetadata = {
  id: "brand-netease-music-outline",
  baseId: "brand-netease-music-outline",
  variant: "default",
  name: "Brand Netease Music Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNeteaseMusicOutlineLogo;
