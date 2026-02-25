/**
 * Auto-generated logo component: Brand Yandex Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandYandexOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandYandexOutlineLogo = React.forwardRef<SVGSVGElement, BrandYandexOutlineLogoProps>(
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
      <path d="M15 20v-16h-2a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4h2" />
  <path d="M9 20l3 -7" />
    </svg>
  )
);

BrandYandexOutlineLogo.displayName = "BrandYandexOutlineLogo";

export const BrandYandexOutlineLogoMetadata = {
  id: "brand-yandex-outline",
  baseId: "brand-yandex-outline",
  variant: "default",
  name: "Brand Yandex Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandYandexOutlineLogo;
