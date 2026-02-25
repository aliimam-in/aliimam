/**
 * Auto-generated logo component: Brand Foursquare Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFoursquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFoursquareOutlineLogo = React.forwardRef<SVGSVGElement, BrandFoursquareOutlineLogoProps>(
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
      <path d="M7 3h10c.644 0 1.11 .696 .978 1.33l-1.984 9.859a1.014 1.014 0 0 1 -1 .811h-2.254c-.308 0 -.6 .141 -.793 .382l-4.144 5.25c-.599 .752 -1.809 .331 -1.809 -.632v-16c0 -.564 .44 -1 1 -1l.006 0" />
  <path d="M12 9l5 0" />
    </svg>
  )
);

BrandFoursquareOutlineLogo.displayName = "BrandFoursquareOutlineLogo";

export const BrandFoursquareOutlineLogoMetadata = {
  id: "brand-foursquare-outline",
  baseId: "brand-foursquare-outline",
  variant: "default",
  name: "Brand Foursquare Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFoursquareOutlineLogo;
