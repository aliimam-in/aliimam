/**
 * Auto-generated logo component: Brand Kick Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandKickOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandKickOutlineLogo = React.forwardRef<SVGSVGElement, BrandKickOutlineLogoProps>(
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
      <path d="M4 4h5v4h3v-2h2v-2h6v4h-2v2h-2v4h2v2h2v4h-6v-2h-2v-2h-3v4h-5l0 -16" />
    </svg>
  )
);

BrandKickOutlineLogo.displayName = "BrandKickOutlineLogo";

export const BrandKickOutlineLogoMetadata = {
  id: "brand-kick-outline",
  baseId: "brand-kick-outline",
  variant: "default",
  name: "Brand Kick Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandKickOutlineLogo;
