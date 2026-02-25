/**
 * Auto-generated logo component: Brand Valorant Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandValorantOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandValorantOutlineLogo = React.forwardRef<SVGSVGElement, BrandValorantOutlineLogoProps>(
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
      <path d="M14.5 14h4.5l2 -2v-6l-6.5 8" />
  <path d="M9 19h5l-11 -13v6l6 7" />
    </svg>
  )
);

BrandValorantOutlineLogo.displayName = "BrandValorantOutlineLogo";

export const BrandValorantOutlineLogoMetadata = {
  id: "brand-valorant-outline",
  baseId: "brand-valorant-outline",
  variant: "default",
  name: "Brand Valorant Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandValorantOutlineLogo;
