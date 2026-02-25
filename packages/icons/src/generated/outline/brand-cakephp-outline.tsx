/**
 * Auto-generated logo component: Brand Cakephp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCakephpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCakephpOutlineLogo = React.forwardRef<SVGSVGElement, BrandCakephpOutlineLogoProps>(
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
      <path d="M12 11l8 2c1.361 -.545 2 -1.248 2 -2v-3.8c0 -1.765 -4.479 -3.2 -10.002 -3.2c-5.522 0 -9.998 1.435 -9.998 3.2v2.8c0 1.766 4.478 4 10 4v-3" />
  <path d="M12 14v3l8 2c1.362 -.547 2 -1.246 2 -2v-3c0 .754 -.638 1.453 -2 2l-8 -2" />
  <path d="M2 17c0 1.766 4.476 3 9.998 3l.002 -3c-5.522 0 -10 -1.734 -10 -3.5v3.5" />
  <path d="M2 10v4" />
  <path d="M22 10v4" />
    </svg>
  )
);

BrandCakephpOutlineLogo.displayName = "BrandCakephpOutlineLogo";

export const BrandCakephpOutlineLogoMetadata = {
  id: "brand-cakephp-outline",
  baseId: "brand-cakephp-outline",
  variant: "default",
  name: "Brand Cakephp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCakephpOutlineLogo;
