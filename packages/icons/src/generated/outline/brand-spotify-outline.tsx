/**
 * Auto-generated logo component: Brand Spotify Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSpotifyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSpotifyOutlineLogo = React.forwardRef<SVGSVGElement, BrandSpotifyOutlineLogoProps>(
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
  <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
  <path d="M9 15c1.5 -1 4 -1 5 .5" />
  <path d="M7 9c2 -1 6 -2 10 .5" />
    </svg>
  )
);

BrandSpotifyOutlineLogo.displayName = "BrandSpotifyOutlineLogo";

export const BrandSpotifyOutlineLogoMetadata = {
  id: "brand-spotify-outline",
  baseId: "brand-spotify-outline",
  variant: "default",
  name: "Brand Spotify Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSpotifyOutlineLogo;
