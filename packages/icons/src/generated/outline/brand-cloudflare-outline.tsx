/**
 * Auto-generated logo component: Brand Cloudflare Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCloudflareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCloudflareOutlineLogo = React.forwardRef<SVGSVGElement, BrandCloudflareOutlineLogoProps>(
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
      <path d="M13.031 7.007c2.469 -.007 3.295 1.293 3.969 2.993c4 0 4.994 3.825 5 6h-20c-.001 -1.64 1.36 -2.954 3 -3c0 -1.5 1 -3 3 -3c.66 -1.942 2.562 -2.986 5.031 -2.993" />
  <path d="M12 13h6" />
  <path d="M17 10l-2.5 6" />
    </svg>
  )
);

BrandCloudflareOutlineLogo.displayName = "BrandCloudflareOutlineLogo";

export const BrandCloudflareOutlineLogoMetadata = {
  id: "brand-cloudflare-outline",
  baseId: "brand-cloudflare-outline",
  variant: "default",
  name: "Brand Cloudflare Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCloudflareOutlineLogo;
