/**
 * Auto-generated logo component: Brand Vlc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVlcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVlcOutlineLogo = React.forwardRef<SVGSVGElement, BrandVlcOutlineLogoProps>(
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
      <path d="M13.79 4.337l3.101 9.305c.33 .985 -.113 2.07 -1.02 2.499a9.148 9.148 0 0 1 -7.742 0c-.907 -.428 -1.35 -1.514 -1.02 -2.499l3.1 -9.305c.267 -.8 .985 -1.337 1.791 -1.337c.807 0 1.525 .537 1.79 1.337" />
  <path d="M7 14h-1.429a2 2 0 0 0 -1.923 1.45l-.571 2a2 2 0 0 0 1.923 2.55h13.998a2 2 0 0 0 1.923 -2.55l-.572 -2a2 2 0 0 0 -1.923 -1.45h-1.426" />
    </svg>
  )
);

BrandVlcOutlineLogo.displayName = "BrandVlcOutlineLogo";

export const BrandVlcOutlineLogoMetadata = {
  id: "brand-vlc-outline",
  baseId: "brand-vlc-outline",
  variant: "default",
  name: "Brand Vlc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVlcOutlineLogo;
