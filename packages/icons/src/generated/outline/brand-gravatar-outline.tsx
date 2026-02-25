/**
 * Auto-generated logo component: Brand Gravatar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGravatarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGravatarOutlineLogo = React.forwardRef<SVGSVGElement, BrandGravatarOutlineLogoProps>(
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
      <path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" />
    </svg>
  )
);

BrandGravatarOutlineLogo.displayName = "BrandGravatarOutlineLogo";

export const BrandGravatarOutlineLogoMetadata = {
  id: "brand-gravatar-outline",
  baseId: "brand-gravatar-outline",
  variant: "default",
  name: "Brand Gravatar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGravatarOutlineLogo;
