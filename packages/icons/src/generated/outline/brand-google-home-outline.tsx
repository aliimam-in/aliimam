/**
 * Auto-generated logo component: Brand Google Home Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGoogleHomeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGoogleHomeOutlineLogo = React.forwardRef<SVGSVGElement, BrandGoogleHomeOutlineLogoProps>(
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
      <path d="M19.072 21h-14.144a1.928 1.928 0 0 1 -1.928 -1.928v-6.857c0 -.512 .203 -1 .566 -1.365l7.07 -7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363 .362 .566 .853 .566 1.365v6.857a1.928 1.928 0 0 1 -1.928 1.928" />
  <path d="M7 13v4h10v-4l-5 -5" />
  <path d="M14.8 5.2l-11.8 11.8" />
  <path d="M7 17v4" />
  <path d="M17 17v4" />
    </svg>
  )
);

BrandGoogleHomeOutlineLogo.displayName = "BrandGoogleHomeOutlineLogo";

export const BrandGoogleHomeOutlineLogoMetadata = {
  id: "brand-google-home-outline",
  baseId: "brand-google-home-outline",
  variant: "default",
  name: "Brand Google Home Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGoogleHomeOutlineLogo;
