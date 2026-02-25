/**
 * Auto-generated logo component: Brand Apple Podcast Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandApplePodcastOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandApplePodcastOutlineLogo = React.forwardRef<SVGSVGElement, BrandApplePodcastOutlineLogoProps>(
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
      <path d="M18.364 18.364a9 9 0 1 0 -12.728 0" />
  <path d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752" />
  <path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

BrandApplePodcastOutlineLogo.displayName = "BrandApplePodcastOutlineLogo";

export const BrandApplePodcastOutlineLogoMetadata = {
  id: "brand-apple-podcast-outline",
  baseId: "brand-apple-podcast-outline",
  variant: "default",
  name: "Brand Apple Podcast Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandApplePodcastOutlineLogo;
