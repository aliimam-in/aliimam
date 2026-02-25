/**
 * Auto-generated logo component: Brand Google Podcasts Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGooglePodcastsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGooglePodcastsOutlineLogo = React.forwardRef<SVGSVGElement, BrandGooglePodcastsOutlineLogoProps>(
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
      <path d="M12 3v2" />
  <path d="M12 19v2" />
  <path d="M12 8v8" />
  <path d="M8 17v2" />
  <path d="M4 11v2" />
  <path d="M20 11v2" />
  <path d="M8 5v8" />
  <path d="M16 7v-2" />
  <path d="M16 19v-8" />
    </svg>
  )
);

BrandGooglePodcastsOutlineLogo.displayName = "BrandGooglePodcastsOutlineLogo";

export const BrandGooglePodcastsOutlineLogoMetadata = {
  id: "brand-google-podcasts-outline",
  baseId: "brand-google-podcasts-outline",
  variant: "default",
  name: "Brand Google Podcasts Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGooglePodcastsOutlineLogo;
