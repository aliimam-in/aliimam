/**
 * Auto-generated logo component: Brand Metabrainz Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMetabrainzOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMetabrainzOutlineLogo = React.forwardRef<SVGSVGElement, BrandMetabrainzOutlineLogoProps>(
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
      <path d="M3 7v10l7 4v-18l-7 4" />
  <path d="M21 7v10l-7 4v-18l7 4" />
    </svg>
  )
);

BrandMetabrainzOutlineLogo.displayName = "BrandMetabrainzOutlineLogo";

export const BrandMetabrainzOutlineLogoMetadata = {
  id: "brand-metabrainz-outline",
  baseId: "brand-metabrainz-outline",
  variant: "default",
  name: "Brand Metabrainz Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMetabrainzOutlineLogo;
