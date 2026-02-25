/**
 * Auto-generated logo component: Brand Django Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDjangoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDjangoOutlineLogo = React.forwardRef<SVGSVGElement, BrandDjangoOutlineLogoProps>(
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
      <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
  <path d="M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201" />
  <path d="M16 7v.01" />
  <path d="M16 10v5.586c0 .905 -.36 1.774 -1 2.414" />
    </svg>
  )
);

BrandDjangoOutlineLogo.displayName = "BrandDjangoOutlineLogo";

export const BrandDjangoOutlineLogoMetadata = {
  id: "brand-django-outline",
  baseId: "brand-django-outline",
  variant: "default",
  name: "Brand Django Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDjangoOutlineLogo;
