/**
 * Auto-generated logo component: Brand Openvpn Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOpenvpnOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOpenvpnOutlineLogo = React.forwardRef<SVGSVGElement, BrandOpenvpnOutlineLogoProps>(
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
      <path d="M15.618 20.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

BrandOpenvpnOutlineLogo.displayName = "BrandOpenvpnOutlineLogo";

export const BrandOpenvpnOutlineLogoMetadata = {
  id: "brand-openvpn-outline",
  baseId: "brand-openvpn-outline",
  variant: "default",
  name: "Brand Openvpn Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOpenvpnOutlineLogo;
