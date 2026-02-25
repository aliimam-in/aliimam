/**
 * Auto-generated logo component: Brand Nextjs Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNextjsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNextjsOutlineLogo = React.forwardRef<SVGSVGElement, BrandNextjsOutlineLogoProps>(
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
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
  <path d="M15 12v-3" />
    </svg>
  )
);

BrandNextjsOutlineLogo.displayName = "BrandNextjsOutlineLogo";

export const BrandNextjsOutlineLogoMetadata = {
  id: "brand-nextjs-outline",
  baseId: "brand-nextjs-outline",
  variant: "default",
  name: "Brand Nextjs Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNextjsOutlineLogo;
