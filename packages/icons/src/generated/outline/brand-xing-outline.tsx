/**
 * Auto-generated logo component: Brand Xing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandXingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandXingOutlineLogo = React.forwardRef<SVGSVGElement, BrandXingOutlineLogoProps>(
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
      <path d="M16 21l-4 -7l6.5 -11" />
  <path d="M7 7l2 3.5l-3 4.5" />
    </svg>
  )
);

BrandXingOutlineLogo.displayName = "BrandXingOutlineLogo";

export const BrandXingOutlineLogoMetadata = {
  id: "brand-xing-outline",
  baseId: "brand-xing-outline",
  variant: "default",
  name: "Brand Xing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandXingOutlineLogo;
