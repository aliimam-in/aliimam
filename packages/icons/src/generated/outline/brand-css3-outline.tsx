/**
 * Auto-generated logo component: Brand Css3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCss3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCss3OutlineLogo = React.forwardRef<SVGSVGElement, BrandCss3OutlineLogoProps>(
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
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0" />
  <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </svg>
  )
);

BrandCss3OutlineLogo.displayName = "BrandCss3OutlineLogo";

export const BrandCss3OutlineLogoMetadata = {
  id: "brand-css3-outline",
  baseId: "brand-css3-outline",
  variant: "default",
  name: "Brand Css3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCss3OutlineLogo;
