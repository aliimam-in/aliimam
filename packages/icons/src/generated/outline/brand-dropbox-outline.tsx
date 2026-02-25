/**
 * Auto-generated logo component: Brand Dropbox Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDropboxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDropboxOutlineLogo = React.forwardRef<SVGSVGElement, BrandDropboxOutlineLogoProps>(
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
      <path d="M7.5 10.625l-4.5 -2.813l4.5 -2.812l4.5 2.813m-4.5 2.812l4.5 -2.813m-4.5 2.813l-4.5 2.823l4.5 2.802m0 -5.625l4.5 2.823m0 -5.636l4.5 2.791l4.5 -2.812l-4.5 -2.791l-4.5 2.813m-4.5 8.438l4.5 -2.802m-4.5 2.802v1.123l4.5 2.627l4.5 -2.627v-1.123m-4.5 -2.802l4.5 -2.823l4.5 2.823l-4.5 2.802m-4.5 -2.802l4.5 2.802" />
    </svg>
  )
);

BrandDropboxOutlineLogo.displayName = "BrandDropboxOutlineLogo";

export const BrandDropboxOutlineLogoMetadata = {
  id: "brand-dropbox-outline",
  baseId: "brand-dropbox-outline",
  variant: "default",
  name: "Brand Dropbox Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDropboxOutlineLogo;
