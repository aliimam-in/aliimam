/**
 * Auto-generated logo component: Brand Ctemplar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCtemplarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCtemplarOutlineLogo = React.forwardRef<SVGSVGElement, BrandCtemplarOutlineLogoProps>(
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
      <path d="M6.04 14.831l4.46 -4.331" />
  <path d="M12.555 20.82c4.55 -3.456 7.582 -8.639 8.426 -14.405a1.668 1.668 0 0 0 -.934 -1.767a19.647 19.647 0 0 0 -8.047 -1.648a19.647 19.647 0 0 0 -8.047 1.647a1.668 1.668 0 0 0 -.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.948 .948 0 0 0 1.11 0" />
  <path d="M20 5c-2 0 -4.37 3.304 -8 6.644c-3.63 -3.34 -6 -6.644 -8 -6.644" />
  <path d="M17.738 15l-4.238 -4.5" />
    </svg>
  )
);

BrandCtemplarOutlineLogo.displayName = "BrandCtemplarOutlineLogo";

export const BrandCtemplarOutlineLogoMetadata = {
  id: "brand-ctemplar-outline",
  baseId: "brand-ctemplar-outline",
  variant: "default",
  name: "Brand Ctemplar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCtemplarOutlineLogo;
