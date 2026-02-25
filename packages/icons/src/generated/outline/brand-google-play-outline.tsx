/**
 * Auto-generated logo component: Brand Google Play Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGooglePlayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGooglePlayOutlineLogo = React.forwardRef<SVGSVGElement, BrandGooglePlayOutlineLogoProps>(
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
      <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607l0 -.001" />
  <path d="M15 9l-10.5 11.5" />
  <path d="M4.5 3.5l10.5 11.5" />
    </svg>
  )
);

BrandGooglePlayOutlineLogo.displayName = "BrandGooglePlayOutlineLogo";

export const BrandGooglePlayOutlineLogoMetadata = {
  id: "brand-google-play-outline",
  baseId: "brand-google-play-outline",
  variant: "default",
  name: "Brand Google Play Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGooglePlayOutlineLogo;
