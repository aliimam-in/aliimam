/**
 * Auto-generated logo component: Brand Angular Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAngularOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAngularOutlineLogo = React.forwardRef<SVGSVGElement, BrandAngularOutlineLogoProps>(
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
      <path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734l0 -.001" />
  <path d="M9 15l3 -8l3 8" />
  <path d="M10 13h4" />
    </svg>
  )
);

BrandAngularOutlineLogo.displayName = "BrandAngularOutlineLogo";

export const BrandAngularOutlineLogoMetadata = {
  id: "brand-angular-outline",
  baseId: "brand-angular-outline",
  variant: "default",
  name: "Brand Angular Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAngularOutlineLogo;
