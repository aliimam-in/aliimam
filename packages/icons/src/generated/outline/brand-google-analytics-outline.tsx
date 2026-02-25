/**
 * Auto-generated logo component: Brand Google Analytics Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGoogleAnalyticsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGoogleAnalyticsOutlineLogo = React.forwardRef<SVGSVGElement, BrandGoogleAnalyticsOutlineLogoProps>(
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
      <path d="M10 10.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105l0 -9.79" />
  <path d="M17 4.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105l0 -15.79" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

BrandGoogleAnalyticsOutlineLogo.displayName = "BrandGoogleAnalyticsOutlineLogo";

export const BrandGoogleAnalyticsOutlineLogoMetadata = {
  id: "brand-google-analytics-outline",
  baseId: "brand-google-analytics-outline",
  variant: "default",
  name: "Brand Google Analytics Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGoogleAnalyticsOutlineLogo;
