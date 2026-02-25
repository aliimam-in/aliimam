/**
 * Auto-generated logo component: Brand Aws Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAwsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAwsOutlineLogo = React.forwardRef<SVGSVGElement, BrandAwsOutlineLogoProps>(
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
      <path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" />
  <path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" />
  <path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
  <path d="M3 9h3" />
  <path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6" />
  <path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
    </svg>
  )
);

BrandAwsOutlineLogo.displayName = "BrandAwsOutlineLogo";

export const BrandAwsOutlineLogoMetadata = {
  id: "brand-aws-outline",
  baseId: "brand-aws-outline",
  variant: "default",
  name: "Brand Aws Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAwsOutlineLogo;
