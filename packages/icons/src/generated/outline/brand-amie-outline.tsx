/**
 * Auto-generated logo component: Brand Amie Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAmieOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAmieOutlineLogo = React.forwardRef<SVGSVGElement, BrandAmieOutlineLogoProps>(
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
      <path d="M3 8.5c0 1.33 .472 2.55 1.257 3.5a5.5 5.5 0 0 0 7.743 7.743a5.5 5.5 0 0 0 7.743 -7.743a5.5 5.5 0 0 0 -7.743 -7.743a5.5 5.5 0 0 0 -9 4.243" />
  <path d="M10 9.5c0 -.828 .895 -1.5 2 -1.5s2 .672 2 1.5v5c0 .828 -.895 1.5 -2 1.5s-2 -.672 -2 -1.5l0 -5" />
    </svg>
  )
);

BrandAmieOutlineLogo.displayName = "BrandAmieOutlineLogo";

export const BrandAmieOutlineLogoMetadata = {
  id: "brand-amie-outline",
  baseId: "brand-amie-outline",
  variant: "default",
  name: "Brand Amie Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAmieOutlineLogo;
