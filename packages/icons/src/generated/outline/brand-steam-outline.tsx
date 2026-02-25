/**
 * Auto-generated logo component: Brand Steam Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSteamOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSteamOutlineLogo = React.forwardRef<SVGSVGElement, BrandSteamOutlineLogoProps>(
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
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 3l-.176 0a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302" />
  <path d="M15.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="currentColor" />
    </svg>
  )
);

BrandSteamOutlineLogo.displayName = "BrandSteamOutlineLogo";

export const BrandSteamOutlineLogoMetadata = {
  id: "brand-steam-outline",
  baseId: "brand-steam-outline",
  variant: "default",
  name: "Brand Steam Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSteamOutlineLogo;
