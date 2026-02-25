/**
 * Auto-generated logo component: Brand Ao3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAo3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAo3OutlineLogo = React.forwardRef<SVGSVGElement, BrandAo3OutlineLogoProps>(
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
      <path d="M2 5c7.109 4.1 10.956 10.131 12 14c1.074 -4.67 4.49 -8.94 8 -11" />
  <path d="M12 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 9c-.278 5.494 -2.337 7.33 -4 10c4.013 -2 6.02 -5 15.05 -5c4.012 0 3.51 2.5 1 3c2 .5 2.508 5 -2.007 2" />
    </svg>
  )
);

BrandAo3OutlineLogo.displayName = "BrandAo3OutlineLogo";

export const BrandAo3OutlineLogoMetadata = {
  id: "brand-ao3-outline",
  baseId: "brand-ao3-outline",
  variant: "default",
  name: "Brand Ao3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAo3OutlineLogo;
