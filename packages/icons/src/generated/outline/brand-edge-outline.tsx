/**
 * Auto-generated logo component: Brand Edge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandEdgeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandEdgeOutlineLogo = React.forwardRef<SVGSVGElement, BrandEdgeOutlineLogoProps>(
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
      <path d="M20.978 11.372a9 9 0 1 0 -1.593 5.773" />
  <path d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" />
  <path d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" />
  <path d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" />
    </svg>
  )
);

BrandEdgeOutlineLogo.displayName = "BrandEdgeOutlineLogo";

export const BrandEdgeOutlineLogoMetadata = {
  id: "brand-edge-outline",
  baseId: "brand-edge-outline",
  variant: "default",
  name: "Brand Edge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandEdgeOutlineLogo;
