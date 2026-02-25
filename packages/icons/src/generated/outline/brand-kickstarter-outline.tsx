/**
 * Auto-generated logo component: Brand Kickstarter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandKickstarterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandKickstarterOutlineLogo = React.forwardRef<SVGSVGElement, BrandKickstarterOutlineLogoProps>(
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
      <path d="M11 9l2.975 -4.65c.615 -.9 1.405 -1.35 2.377 -1.35c.79 0 1.474 .286 2.054 .858c.576 .574 .866 1.256 .866 2.054c0 .588 -.153 1.109 -.46 1.559l-2.812 4.029l3.465 4.912c.356 .46 .535 1 .535 1.613a2.92 2.92 0 0 1 -.843 2.098c-.561 .584 -1.242 .877 -2.04 .877c-.876 0 -1.545 -.29 -2 -.87l-4.112 -5.697v3.067c0 .876 -.313 1.69 -.611 2.175c-.543 .883 -1.35 1.325 -2.389 1.325c-.944 0 -1.753 -.327 -2.271 -.974c-.486 -.6 -.729 -1.392 -.729 -2.38v-11.371c0 -.934 .247 -1.706 .74 -2.313c.512 -.641 1.347 -.962 2.26 -.962c.868 0 1.821 .321 2.4 .962c.323 .356 .515 .714 .6 1.08c.052 .224 0 .643 0 1.26v2.698l-.005 0" />
    </svg>
  )
);

BrandKickstarterOutlineLogo.displayName = "BrandKickstarterOutlineLogo";

export const BrandKickstarterOutlineLogoMetadata = {
  id: "brand-kickstarter-outline",
  baseId: "brand-kickstarter-outline",
  variant: "default",
  name: "Brand Kickstarter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandKickstarterOutlineLogo;
