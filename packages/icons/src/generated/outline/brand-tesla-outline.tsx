/**
 * Auto-generated logo component: Brand Tesla Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTeslaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTeslaOutlineLogo = React.forwardRef<SVGSVGElement, BrandTeslaOutlineLogoProps>(
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
      <path d="M12 21l3 -11c2.359 0 3 0 3 1c0 0 1.18 -1.745 2 -3c-3.077 -1.464 -6 -1 -6 -1l-2 2l-2 -2s-2.923 -.464 -6 1c.82 1.255 2 3 2 3c0 -1 .744 -1 3 -1l3 11" />
  <path d="M20 5c-5.114 -2 -10.886 -2 -16 0" />
    </svg>
  )
);

BrandTeslaOutlineLogo.displayName = "BrandTeslaOutlineLogo";

export const BrandTeslaOutlineLogoMetadata = {
  id: "brand-tesla-outline",
  baseId: "brand-tesla-outline",
  variant: "default",
  name: "Brand Tesla Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTeslaOutlineLogo;
