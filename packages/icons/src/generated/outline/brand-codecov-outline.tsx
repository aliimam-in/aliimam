/**
 * Auto-generated logo component: Brand Codecov Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCodecovOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCodecovOutlineLogo = React.forwardRef<SVGSVGElement, BrandCodecovOutlineLogoProps>(
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
      <path d="M9.695 12.985a5.972 5.972 0 0 0 -3.295 -.985c-1.257 0 -2.436 .339 -3.4 1a9 9 0 1 1 18 0c-.966 -.664 -2.14 -1 -3.4 -1a6 6 0 0 0 -5.605 8.144" />
    </svg>
  )
);

BrandCodecovOutlineLogo.displayName = "BrandCodecovOutlineLogo";

export const BrandCodecovOutlineLogoMetadata = {
  id: "brand-codecov-outline",
  baseId: "brand-codecov-outline",
  variant: "default",
  name: "Brand Codecov Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCodecovOutlineLogo;
