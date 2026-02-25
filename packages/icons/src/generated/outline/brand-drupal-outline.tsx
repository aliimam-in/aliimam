/**
 * Auto-generated logo component: Brand Drupal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDrupalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDrupalOutlineLogo = React.forwardRef<SVGSVGElement, BrandDrupalOutlineLogoProps>(
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
      <path d="M12 2c0 4.308 -7 6 -7 12a7 7 0 0 0 14 0c0 -6 -7 -7.697 -7 -12" />
  <path d="M12 11.33a65.753 65.753 0 0 1 -2.012 2.023c-1 .957 -1.988 1.967 -1.988 3.647c0 2.17 1.79 4 4 4s4 -1.827 4 -4c0 -1.676 -.989 -2.685 -1.983 -3.642c-.42 -.404 -2.259 -2.357 -5.517 -5.858l3.5 3.83" />
    </svg>
  )
);

BrandDrupalOutlineLogo.displayName = "BrandDrupalOutlineLogo";

export const BrandDrupalOutlineLogoMetadata = {
  id: "brand-drupal-outline",
  baseId: "brand-drupal-outline",
  variant: "default",
  name: "Brand Drupal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDrupalOutlineLogo;
