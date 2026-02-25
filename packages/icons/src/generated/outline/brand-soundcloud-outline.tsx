/**
 * Auto-generated logo component: Brand Soundcloud Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSoundcloudOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSoundcloudOutlineLogo = React.forwardRef<SVGSVGElement, BrandSoundcloudOutlineLogoProps>(
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
      <path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4" />
  <path d="M9 8l0 9" />
  <path d="M6 17l0 -7" />
  <path d="M3 16l0 -2" />
    </svg>
  )
);

BrandSoundcloudOutlineLogo.displayName = "BrandSoundcloudOutlineLogo";

export const BrandSoundcloudOutlineLogoMetadata = {
  id: "brand-soundcloud-outline",
  baseId: "brand-soundcloud-outline",
  variant: "default",
  name: "Brand Soundcloud Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSoundcloudOutlineLogo;
