/**
 * Auto-generated logo component: Brand Nytimes Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNytimesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNytimesOutlineLogo = React.forwardRef<SVGSVGElement, BrandNytimesOutlineLogoProps>(
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
      <path d="M11.036 5.058a8 8 0 1 0 8.706 9.965" />
  <path d="M12 21v-11l-7.5 4" />
  <path d="M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91" />
  <path d="M9 12v8" />
  <path d="M16 13h-.01" />
    </svg>
  )
);

BrandNytimesOutlineLogo.displayName = "BrandNytimesOutlineLogo";

export const BrandNytimesOutlineLogoMetadata = {
  id: "brand-nytimes-outline",
  baseId: "brand-nytimes-outline",
  variant: "default",
  name: "Brand Nytimes Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNytimesOutlineLogo;
