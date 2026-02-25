/**
 * Auto-generated logo component: Brand Tumblr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTumblrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTumblrOutlineLogo = React.forwardRef<SVGSVGElement, BrandTumblrOutlineLogoProps>(
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
      <path d="M14 21h4v-4h-4v-6h4v-4h-4v-4h-4v1a3 3 0 0 1 -3 3h-1v4h4v6a4 4 0 0 0 4 4" />
    </svg>
  )
);

BrandTumblrOutlineLogo.displayName = "BrandTumblrOutlineLogo";

export const BrandTumblrOutlineLogoMetadata = {
  id: "brand-tumblr-outline",
  baseId: "brand-tumblr-outline",
  variant: "default",
  name: "Brand Tumblr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTumblrOutlineLogo;
