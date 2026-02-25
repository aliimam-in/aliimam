/**
 * Auto-generated logo component: Brand Deezer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDeezerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDeezerOutlineLogo = React.forwardRef<SVGSVGElement, BrandDeezerOutlineLogoProps>(
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
      <path d="M3 16.5h2v.5h-2l0 -.5" />
  <path d="M8 16.5h2.5v.5h-2.5l0 -.5" />
  <path d="M16 17h-2.5v-.5h2.5l0 .5" />
  <path d="M21.5 17h-2.5v-.5h2.5l0 .5" />
  <path d="M21.5 13h-2.5v.5h2.5l0 -.5" />
  <path d="M21.5 9.5h-2.5v.5h2.5l0 -.5" />
  <path d="M21.5 6h-2.5v.5h2.5l0 -.5" />
  <path d="M16 13h-2.5v.5h2.5l0 -.5" />
  <path d="M8 13.5h2.5v-.5h-2.5l0 .5" />
  <path d="M8 9.5h2.5v.5h-2.5l0 -.5" />
    </svg>
  )
);

BrandDeezerOutlineLogo.displayName = "BrandDeezerOutlineLogo";

export const BrandDeezerOutlineLogoMetadata = {
  id: "brand-deezer-outline",
  baseId: "brand-deezer-outline",
  variant: "default",
  name: "Brand Deezer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDeezerOutlineLogo;
