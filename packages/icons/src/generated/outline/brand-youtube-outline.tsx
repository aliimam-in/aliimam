/**
 * Auto-generated logo component: Brand Youtube Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandYoutubeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandYoutubeOutlineLogo = React.forwardRef<SVGSVGElement, BrandYoutubeOutlineLogoProps>(
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
      <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8" />
  <path d="M10 9l5 3l-5 3l0 -6" />
    </svg>
  )
);

BrandYoutubeOutlineLogo.displayName = "BrandYoutubeOutlineLogo";

export const BrandYoutubeOutlineLogoMetadata = {
  id: "brand-youtube-outline",
  baseId: "brand-youtube-outline",
  variant: "default",
  name: "Brand Youtube Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandYoutubeOutlineLogo;
