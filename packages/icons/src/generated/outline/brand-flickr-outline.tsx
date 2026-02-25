/**
 * Auto-generated logo component: Brand Flickr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFlickrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFlickrOutlineLogo = React.forwardRef<SVGSVGElement, BrandFlickrOutlineLogoProps>(
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
      <path d="M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

BrandFlickrOutlineLogo.displayName = "BrandFlickrOutlineLogo";

export const BrandFlickrOutlineLogoMetadata = {
  id: "brand-flickr-outline",
  baseId: "brand-flickr-outline",
  variant: "default",
  name: "Brand Flickr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFlickrOutlineLogo;
