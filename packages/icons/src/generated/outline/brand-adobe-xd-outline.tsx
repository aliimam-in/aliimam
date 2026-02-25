/**
 * Auto-generated logo component: Brand Adobe Xd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAdobeXdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAdobeXdOutlineLogo = React.forwardRef<SVGSVGElement, BrandAdobeXdOutlineLogoProps>(
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
      <path d="M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682" />
  <path d="M6 8l5 8" />
  <path d="M6 16l5 -8" />
  <path d="M18 11v4c0 1.1 -.517 .997 -1.5 .997a2.5 2.5 0 0 1 -2.5 -2.497a2.5 2.5 0 0 1 2.5 -2.5l1.5 0v-3" />
    </svg>
  )
);

BrandAdobeXdOutlineLogo.displayName = "BrandAdobeXdOutlineLogo";

export const BrandAdobeXdOutlineLogoMetadata = {
  id: "brand-adobe-xd-outline",
  baseId: "brand-adobe-xd-outline",
  variant: "default",
  name: "Brand Adobe Xd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAdobeXdOutlineLogo;
