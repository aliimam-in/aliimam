/**
 * Auto-generated logo component: Brand Cucumber Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCucumberOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCucumberOutlineLogo = React.forwardRef<SVGSVGElement, BrandCucumberOutlineLogoProps>(
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
      <path d="M20 10.99c-.01 5.52 -4.48 10 -10 10.01v-2.26l-.01 -.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8 8 0 0 1 9.74 -5.76c3.53 .91 6.03 4.13 6.03 7.78v-.01" />
  <path d="M10.5 8l-.5 -1" />
  <path d="M13.5 14l.5 1" />
  <path d="M9 12.5l-1 .5" />
  <path d="M11 14l-.5 1" />
  <path d="M13 8l.5 -1" />
  <path d="M16 12.5l-1 -.5" />
  <path d="M9 10l-1 -.5" />
    </svg>
  )
);

BrandCucumberOutlineLogo.displayName = "BrandCucumberOutlineLogo";

export const BrandCucumberOutlineLogoMetadata = {
  id: "brand-cucumber-outline",
  baseId: "brand-cucumber-outline",
  variant: "default",
  name: "Brand Cucumber Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCucumberOutlineLogo;
