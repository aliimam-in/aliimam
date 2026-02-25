/**
 * Auto-generated logo component: Brand Gatsby Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGatsbyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGatsbyOutlineLogo = React.forwardRef<SVGSVGElement, BrandGatsbyOutlineLogoProps>(
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
      <path d="M3.296 14.297l6.407 6.407a9.018 9.018 0 0 1 -6.325 -6.116l-.082 -.291" />
  <path d="M16 13h5c-.41 3.603 -3.007 6.59 -6.386 7.614l-11.228 -11.229a9 9 0 0 1 15.66 -2.985" />
    </svg>
  )
);

BrandGatsbyOutlineLogo.displayName = "BrandGatsbyOutlineLogo";

export const BrandGatsbyOutlineLogoMetadata = {
  id: "brand-gatsby-outline",
  baseId: "brand-gatsby-outline",
  variant: "default",
  name: "Brand Gatsby Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGatsbyOutlineLogo;
