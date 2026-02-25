/**
 * Auto-generated logo component: Brand Bitbucket Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBitbucketOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBitbucketOutlineLogo = React.forwardRef<SVGSVGElement, BrandBitbucketOutlineLogoProps>(
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
      <path d="M3.648 4a.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a.644 .644 0 0 0 .642 -.539l3.35 -14.71a.641 .641 0 0 0 -.64 -.744l-16.704 -.007" />
  <path d="M14 15h-4l-1 -6h6l-1 6" />
    </svg>
  )
);

BrandBitbucketOutlineLogo.displayName = "BrandBitbucketOutlineLogo";

export const BrandBitbucketOutlineLogoMetadata = {
  id: "brand-bitbucket-outline",
  baseId: "brand-bitbucket-outline",
  variant: "default",
  name: "Brand Bitbucket Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBitbucketOutlineLogo;
