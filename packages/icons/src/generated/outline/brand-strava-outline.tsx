/**
 * Auto-generated logo component: Brand Strava Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandStravaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandStravaOutlineLogo = React.forwardRef<SVGSVGElement, BrandStravaOutlineLogoProps>(
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
      <path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" />
    </svg>
  )
);

BrandStravaOutlineLogo.displayName = "BrandStravaOutlineLogo";

export const BrandStravaOutlineLogoMetadata = {
  id: "brand-strava-outline",
  baseId: "brand-strava-outline",
  variant: "default",
  name: "Brand Strava Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandStravaOutlineLogo;
