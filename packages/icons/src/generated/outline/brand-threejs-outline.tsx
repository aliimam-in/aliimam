/**
 * Auto-generated logo component: Brand Threejs Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandThreejsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandThreejsOutlineLogo = React.forwardRef<SVGSVGElement, BrandThreejsOutlineLogoProps>(
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
      <path d="M8 22l-5 -19l19 5.5l-14 13.5" />
  <path d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" />
  <path d="M12.573 17.58l-1.573 -6.58l6.13 2.179" />
  <path d="M9.527 4.893l1.473 6.107l-6.31 -1.564l4.837 -4.543" />
    </svg>
  )
);

BrandThreejsOutlineLogo.displayName = "BrandThreejsOutlineLogo";

export const BrandThreejsOutlineLogoMetadata = {
  id: "brand-threejs-outline",
  baseId: "brand-threejs-outline",
  variant: "default",
  name: "Brand Threejs Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandThreejsOutlineLogo;
