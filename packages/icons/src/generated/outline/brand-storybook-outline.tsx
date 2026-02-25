/**
 * Auto-generated logo component: Brand Storybook Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandStorybookOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandStorybookOutlineLogo = React.forwardRef<SVGSVGElement, BrandStorybookOutlineLogoProps>(
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
      <path d="M5 4l.5 16.5l13.5 .5v-18l-14 1" />
  <path d="M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 3 .762 3.3 1.985" />
  <path d="M16 3.5v1" />
    </svg>
  )
);

BrandStorybookOutlineLogo.displayName = "BrandStorybookOutlineLogo";

export const BrandStorybookOutlineLogoMetadata = {
  id: "brand-storybook-outline",
  baseId: "brand-storybook-outline",
  variant: "default",
  name: "Brand Storybook Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandStorybookOutlineLogo;
